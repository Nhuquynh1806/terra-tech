# -*- coding: utf-8 -*-
#
#     ||          ____  _ __
#  +------+      / __ )(_) /_______________ _____  ___
#  | 0xBC |     / __  / / __/ ___/ ___/ __ `/_  / / _ \
#  +------+    / /_/ / / /_/ /__/ /  / /_/ / / /_/  __/
#   ||  ||    /_____/_/\__/\___/_/   \__,_/ /___/\___/
#
#  Copyright (C) 2024
#
#  Crazyflie Web Interface Server
#
#  This program is free software; you can redistribute it and/or
#  modify it under the terms of the GNU General Public License
#  as published by the Free Software Foundation; either version 2
#  of the License, or (at your option) any later version.
#
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.

"""Flask web server for Crazyflie control."""

import os
import sys
import logging
import signal
import threading
import time
import re
from flask import Flask, jsonify, request, send_from_directory, send_file
from flask_cors import CORS
from flask_socketio import SocketIO, emit
import cflib.crtp
from cflib.crazyflie import Crazyflie
from cflib.crazyflie.log import LogConfig

import cfclient

# Load environment variables from .env file (before logger is initialized)
_env_loaded = False
_env_file_path = None
try:
    from dotenv import load_dotenv
    # Load .env file from project root
    env_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), '.env')
    if os.path.exists(env_path):
        result = load_dotenv(env_path)
        if result:
            _env_loaded = True
            _env_file_path = env_path
    else:
        # Try loading from current directory
        if os.path.exists('.env'):
            result = load_dotenv('.env')
            if result:
                _env_loaded = True
                _env_file_path = os.path.abspath('.env')
        else:
            # Try default location (current directory)
            result = load_dotenv()
            if result:
                _env_loaded = True
                _env_file_path = os.path.abspath('.env') if os.path.exists('.env') else None
except ImportError:
    # python-dotenv not installed, skip .env loading
    pass

# LLM API imports (optional - will fail gracefully if not installed)
OPENAI_AVAILABLE = False
GEMINI_AVAILABLE = False

try:
    import openai
    OPENAI_AVAILABLE = True
except ImportError:
    pass

try:
    import google.generativeai as genai
    GEMINI_AVAILABLE = True
except ImportError:
    pass

if os.name == 'posix':
    stdout = os.dup(1)
    os.dup2(os.open('/dev/null', os.O_WRONLY), 1)
    sys.stdout = os.fdopen(stdout, 'w')

# set SDL to use the dummy NULL video driver
os.environ["SDL_VIDEODRIVER"] = "dummy"

logger = logging.getLogger(__name__)

# Log .env loading status with detailed debug information
# Use print() to ensure message appears before logging is configured
if _env_loaded and _env_file_path:
    print(f"[ENV] ✓ Environment variables successfully loaded from: {_env_file_path}")
    logger.info(f"✓ Environment variables successfully loaded from: {_env_file_path}")
    # Check which LLM-related variables are set (without showing values)
    env_vars_found = []
    if os.getenv('LLM_PROVIDER'):
        env_vars_found.append('LLM_PROVIDER')
    if os.getenv('OPENAI_API_KEY'):
        env_vars_found.append('OPENAI_API_KEY')
    if os.getenv('GEMINI_API_KEY'):
        env_vars_found.append('GEMINI_API_KEY')
    
    if env_vars_found:
        print(f"[ENV] Found environment variables: {', '.join(env_vars_found)}")
        logger.info(f"Found environment variables: {', '.join(env_vars_found)}")
    else:
        print("[ENV] No LLM-related environment variables found in .env file")
        logger.debug("No LLM-related environment variables found in .env file")
else:
    print("[ENV] No .env file found or failed to load. Using system environment variables only.")
    logger.info("No .env file found or failed to load. Using system environment variables only.")

# Find static files directory
if not hasattr(sys, 'frozen'):
    module_path = os.path.dirname(__file__)
else:
    module_path = os.path.join(os.path.dirname(sys.executable), 'lib', 'cfweb')
static_folder = os.path.join(module_path, 'static')

# Ensure static folder exists
if not os.path.exists(static_folder):
    # Try alternative location (when installed as package)
    import importlib.util
    try:
        spec = importlib.util.find_spec('cfweb.static')
        if spec and spec.origin:
            static_folder = os.path.dirname(spec.origin)
    except Exception:
        pass

app = Flask(__name__, static_folder=static_folder, static_url_path='')
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*", async_mode='threading')

# Store preview folder path for use in routes
preview_folder_path = os.path.join(module_path, 'preview')
# Log the actual resolved path for debugging
logger.info(f"Module path: {module_path}")
logger.info(f"Preview folder path: {preview_folder_path}")
if os.path.exists(preview_folder_path):
    files = os.listdir(preview_folder_path)
    logger.info(f"Preview folder configured: {preview_folder_path} (found {len(files)} files)")
else:
    logger.warning(f"Preview folder not found: {preview_folder_path}")
    # Try alternative location (when installed as package)
    import importlib.util
    try:
        spec = importlib.util.find_spec('cfweb.preview')
        if spec and spec.origin:
            alt_preview_folder = os.path.dirname(spec.origin)
            logger.info(f"Trying alternative preview folder: {alt_preview_folder}")
            if os.path.exists(alt_preview_folder):
                preview_folder_path = alt_preview_folder
                logger.info(f"Using alternative preview folder: {preview_folder_path}")
    except Exception as e:
        logger.debug(f"Could not find alternative preview folder: {e}")

# Store knowledge base path and load it
knowledge_base_path = os.path.join(static_folder, 'knowledges', 'data.md')
knowledge_base = None
if os.path.exists(knowledge_base_path):
    try:
        with open(knowledge_base_path, 'r', encoding='utf-8') as f:
            knowledge_base = f.read()
        logger.info(f"Knowledge base loaded: {len(knowledge_base)} characters")
    except Exception as e:
        logger.error(f"Failed to load knowledge base: {e}")
        knowledge_base = None
else:
    logger.warning(f"Knowledge base not found at: {knowledge_base_path}")

# LLM API configuration
LLM_PROVIDER = os.getenv('LLM_PROVIDER', 'openai')  # 'openai' or 'gemini'
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY', '')
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY', '')

print(f"[LLM] Configuration - Provider: {LLM_PROVIDER}, OpenAI key set: {bool(OPENAI_API_KEY)}, Gemini key set: {bool(GEMINI_API_KEY)}")
logger.info(f"LLM Configuration - Provider: {LLM_PROVIDER}, OpenAI key set: {bool(OPENAI_API_KEY)}, Gemini key set: {bool(GEMINI_API_KEY)}")

# Initialize LLM clients
if LLM_PROVIDER == 'openai' and OPENAI_AVAILABLE and OPENAI_API_KEY:
    try:
        openai.api_key = OPENAI_API_KEY
        print("[LLM] ✓ OpenAI client initialized successfully")
        logger.info("✓ OpenAI client initialized successfully")
        print(f"[LLM] OpenAI API key loaded (length: {len(OPENAI_API_KEY)} characters)")
        logger.info(f"OpenAI API key loaded (length: {len(OPENAI_API_KEY)} characters)")
    except Exception as e:
        print(f"[LLM] ✗ Failed to initialize OpenAI: {e}")
        logger.error(f"Failed to initialize OpenAI: {e}")
elif LLM_PROVIDER == 'gemini' and GEMINI_AVAILABLE and GEMINI_API_KEY:
    try:
        genai.configure(api_key=GEMINI_API_KEY)
        print("[LLM] ✓ Gemini client initialized successfully")
        logger.info("✓ Gemini client initialized successfully")
        print(f"[LLM] Gemini API key loaded (length: {len(GEMINI_API_KEY)} characters)")
        logger.info(f"Gemini API key loaded (length: {len(GEMINI_API_KEY)} characters)")
    except Exception as e:
        print(f"[LLM] ✗ Failed to initialize Gemini: {e}")
        logger.error(f"Failed to initialize Gemini: {e}")
else:
    if LLM_PROVIDER == 'openai' and not OPENAI_AVAILABLE:
        print("[LLM] ⚠ OpenAI library not installed. Install with: pip install openai")
        logger.warning("OpenAI library not installed. Install with: pip install openai")
    elif LLM_PROVIDER == 'gemini' and not GEMINI_AVAILABLE:
        print("[LLM] ⚠ Gemini library not installed. Install with: pip install google-generativeai")
        logger.warning("Gemini library not installed. Install with: pip install google-generativeai")
    elif not OPENAI_API_KEY and not GEMINI_API_KEY:
        print(f"[LLM] ⚠ LLM provider '{LLM_PROVIDER}' not configured. Set OPENAI_API_KEY or GEMINI_API_KEY environment variable.")
        logger.warning(f"LLM provider '{LLM_PROVIDER}' not configured. Set OPENAI_API_KEY or GEMINI_API_KEY environment variable.")

# Global Crazyflie instance
cf = None
cf_lock = threading.Lock()
connection_status = {
    'connected': False,
    'uri': None,
    'connecting': False
}
connection_timeout_timer = None

# Continuous control loop state (similar to cfclient joystick behavior)
control_state = {
    'roll': 0.0,
    'pitch': 0.0,
    'yaw': 0.0,
    'thrust': 0,
}
control_loop_thread = None
control_loop_stop_event = threading.Event()

# Thrust animation state for gradual takeoff/land
thrust_animation = {
    'active': False,
    'target': 0,
    'current': 0,
    'step': 0,
    'direction': 1,  # 1 for increase, -1 for decrease
}

# Logging configurations
log_configs = {}
active_log_configs = {}

# Parameter cache
param_cache = {}
param_toc = {}
log_toc = {}

# Keep track of backend-managed log configs (for example, pose logger created
# automatically when TOCs are ready)
backend_logs_initialized = {
    'pose_data': False,
}

# Current pose data (for commander commands)
current_pose = {
    'x': 0.0,
    'y': 0.0,
    'z': 0.0,
    'roll': 0.0,
    'pitch': 0.0,
    'yaw': 0.0,
}


def init_crazyflie():
    """Initialize the Crazyflie library."""
    global cf
    with cf_lock:
        if cf is None:
            cflib.crtp.init_drivers()
            cf = Crazyflie(ro_cache=None,
                          rw_cache=cfclient.config_path + "/cache")
            setup_callbacks()
    return cf


def setup_callbacks():
    """Setup Crazyflie callbacks."""
    if cf is None:
        return
    
    # Add callbacks (they can be added multiple times safely in cflib)
    cf.connected.add_callback(on_connected)
    cf.connection_failed.add_callback(on_connection_failed)
    cf.connection_lost.add_callback(on_connection_lost)
    cf.disconnected.add_callback(on_disconnected)
    cf.connection_requested.add_callback(on_connection_requested)
    cf.param.all_updated.add_callback(on_tocs_updated)
    cf.param.all_update_callback.add_callback(on_param_updated)
    cf.link_quality_updated.add_callback(on_link_quality_updated)
    
    # Add link_established callback if available (fires when link is ready)
    if hasattr(cf, 'link_established'):
        cf.link_established.add_callback(on_link_established)
    
    # Setup CRTP packet capture if available
    setup_crpt_packet_capture()


def on_link_established(link_uri):
    """Callback when link is established (before full connection setup)."""
    logger.info(f"Link established to {link_uri}")
    # This fires before 'connected', so we don't update status here
    # but we can use it for logging/debugging


def on_connection_requested(link_uri):
    """Callback when connection is requested."""
    global connection_status
    with cf_lock:
        connection_status['connecting'] = True
    try:
        socketio.emit('connection_status', {
            'event': 'connecting',
            'uri': link_uri
        })
    except Exception as e:
        logger.error(f"Error emitting connection_status (connecting): {e}")
    logger.info(f"Connection requested to {link_uri}")


def on_connected(link_uri):
    """Callback when connected."""
    global connection_status, connection_timeout_timer
    with cf_lock:
        connection_status['connected'] = True
        connection_status['uri'] = link_uri
        connection_status['connecting'] = False
    # Cancel timeout timer if it exists
    if connection_timeout_timer:
        connection_timeout_timer.cancel()
        connection_timeout_timer = None
    
    # Emit connection status to all clients
    try:
        socketio.emit('connection_status', {
            'event': 'connected',
            'uri': link_uri
        })
        logger.info(f"Emitted connection_status event for {link_uri}")
    except Exception as e:
        logger.error(f"Error emitting connection_status: {e}")
    
    setup_console_callback()
    # Start continuous control loop (sends current setpoint at fixed rate)
    start_control_loop()
    logger.info(f"Connected to {link_uri}")


def on_connection_failed(link_uri, msg):
    """Callback when connection fails."""
    global connection_status, connection_timeout_timer
    with cf_lock:
        connection_status['connected'] = False
        connection_status['connecting'] = False
    # Cancel timeout timer if it exists
    if connection_timeout_timer:
        connection_timeout_timer.cancel()
        connection_timeout_timer = None
    try:
        socketio.emit('connection_status', {
            'event': 'failed',
            'uri': link_uri,
            'message': msg
        })
    except Exception as e:
        logger.error(f"Error emitting connection_status (failed): {e}")
    logger.error(f"Connection failed to {link_uri}: {msg}")


def on_connection_lost(link_uri, msg):
    """Callback when connection is lost."""
    global connection_status, current_pose, thrust_animation
    with cf_lock:
        connection_status['connected'] = False
        # Reset pose data
        current_pose = {
            'x': 0.0,
            'y': 0.0,
            'z': 0.0,
            'roll': 0.0,
            'pitch': 0.0,
            'yaw': 0.0,
        }
        # Stop thrust animation
        thrust_animation['active'] = False
    try:
        socketio.emit('connection_status', {
            'event': 'lost',
            'uri': link_uri,
            'message': msg
        })
    except Exception as e:
        logger.error(f"Error emitting connection_status (lost): {e}")
    logger.warning(f"Connection lost to {link_uri}: {msg}")
    # Stop control loop and send a final zero-thrust setpoint for safety
    stop_control_loop(send_zero_setpoint=True)


def on_disconnected(link_uri):
    """Callback when disconnected."""
    global connection_status, current_pose, thrust_animation
    with cf_lock:
        connection_status['connected'] = False
        connection_status['uri'] = None
        # Reset pose data
        current_pose = {
            'x': 0.0,
            'y': 0.0,
            'z': 0.0,
            'roll': 0.0,
            'pitch': 0.0,
            'yaw': 0.0,
        }
        # Stop thrust animation
        thrust_animation['active'] = False
    try:
        socketio.emit('connection_status', {
            'event': 'disconnected',
            'uri': link_uri
        })
    except Exception as e:
        logger.error(f"Error emitting connection_status (disconnected): {e}")
    logger.info(f"Disconnected from {link_uri}")
    # Stop control loop and send a final zero-thrust setpoint for safety
    stop_control_loop(send_zero_setpoint=True)


def on_tocs_updated():
    """Callback when TOCs are updated."""
    global param_toc, log_toc, param_cache, backend_logs_initialized
    
    if cf is None:
        return
    
    # Update log TOC
    log_toc_data = {}
    log_toc_obj = cf.log.toc.toc
    for group in log_toc_obj:
        log_toc_data[group] = {}
        for name in log_toc_obj[group]:
            log_toc_data[group][name] = {
                "type": log_toc_obj[group][name].ctype
            }
    log_toc = log_toc_data
    
    # Update param TOC
    param_toc_data = {}
    param_toc_obj = cf.param.toc.toc
    for group in param_toc_obj:
        param_toc_data[group] = {}
        for name in param_toc_obj[group]:
            param_toc_data[group][name] = {
                "type": param_toc_obj[group][name].ctype,
                "access": "RW" if param_toc_obj[group][name].access == 0 else "RO",
                "value": cf.param.values[group][name]
            }
            param_cache[f"{group}.{name}"] = cf.param.values[group][name]
    
    param_toc = param_toc_data
    
    # Ensure backend-managed loggers (like pose_data) are created and started
    try:
        ensure_backend_pose_logger()
    except Exception as e:
        logger.error(f"Error initializing backend pose logger: {e}")
    
    socketio.emit('tocs_updated', {
        'log': log_toc,
        'param': param_toc
    })


def ensure_backend_pose_logger():
    """Create and start a backend-managed pose_data logger, similar to cfclient.

    This logger streams stateEstimate.{x,y,z,roll,pitch,yaw} at 40 ms and is
    created once per connection when the log TOC is ready. The frontend does
    not need to create this log via the REST API; it simply listens to
    log_data events with name 'pose_data'.
    """
    global backend_logs_initialized, log_configs, active_log_configs
    
    if cf is None or not connection_status['connected']:
        return
    
    # Only initialize once per connection
    if backend_logs_initialized.get('pose_data'):
        return
    
    with cf_lock:
        # Double-check connection inside the lock
        if cf is None or not connection_status['connected']:
            return
        
        if 'pose_data' in log_configs:
            # Already created (for example via REST API) – just start it if needed
            lg = log_configs['pose_data']
        else:
            lg = LogConfig('pose_data', 40)
            for var in [
                'stateEstimate.x',
                'stateEstimate.y',
                'stateEstimate.z',
                'stateEstimate.roll',
                'stateEstimate.pitch',
                'stateEstimate.yaw',
            ]:
                lg.add_variable(var)
            
            # Attach callbacks before adding config, like cfclient
            lg.data_received_cb.add_callback(
                lambda ts, data, conf: on_log_data(ts, data, conf)
            )
            lg.error_cb.add_callback(
                lambda conf, msg: on_log_error(conf, msg)
            )
            
            log_configs['pose_data'] = lg
            cf.log.add_config(lg)
        
        try:
            lg.start()
            active_log_configs['pose_data'] = lg
            backend_logs_initialized['pose_data'] = True
            logger.info("Backend pose_data logger started (40 ms, stateEstimate.*)")
        except Exception as e:
            logger.error(f"Failed to start backend pose_data logger: {e}")


def on_param_updated(name, value):
    """Callback when parameter is updated."""
    global param_cache
    param_cache[name] = value
    socketio.emit('param_updated', {
        'name': name,
        'value': value
    })


def on_link_quality_updated(percentage):
    """Callback when link quality is updated."""
    socketio.emit('link_quality', {
        'percentage': percentage
    })


def control_loop():
    """Background loop that continuously sends the latest control setpoint.

    This mimics cfclient's joystick reader behaviour: as long as we are
    connected, we continuously send the current roll/pitch/yaw/thrust to
    the Crazyflie at a fixed rate. When the UI is idle, the current thrust
    is 0, so we keep sending zero-thrust setpoints which ensures that the
    motors stop quickly and do not "coast" for a few seconds.
    """
    global control_state, thrust_animation
    rate_hz = 50.0  # 50 Hz update rate (~20 ms), similar to cfclient
    period = 1.0 / rate_hz
    # Thrust animation: change by ~1000 per second (1000 / 50 Hz = 20 per step) - 2x speed
    thrust_step_size = 1000.0 / rate_hz  # ~20 per update at 50 Hz

    logger.info("Control loop thread started")
    while not control_loop_stop_event.is_set():
        try:
            with cf_lock:
                if cf and connection_status['connected']:
                    # Handle gradual thrust animation for takeoff/land
                    if thrust_animation['active']:
                        current = thrust_animation['current']
                        target = thrust_animation['target']
                        step = thrust_step_size * thrust_animation['direction']
                        
                        if thrust_animation['direction'] > 0:  # Increasing (takeoff)
                            new_thrust = min(current + step, target)
                        else:  # Decreasing (land)
                            new_thrust = max(current + step, target)
                        
                        thrust_animation['current'] = new_thrust
                        control_state['thrust'] = int(new_thrust)
                        
                        # Check if we've reached the target
                        if (thrust_animation['direction'] > 0 and new_thrust >= target) or \
                           (thrust_animation['direction'] < 0 and new_thrust <= target):
                            thrust_animation['active'] = False
                            logger.info(f"Thrust animation complete: {int(new_thrust)}")
                    
                    try:
                        cf.commander.send_setpoint(
                            control_state['roll'],
                            control_state['pitch'],
                            control_state['yaw'],
                            int(control_state['thrust']),
                        )
                    except Exception as e:
                        logger.error(f"Control loop send_setpoint error: {e}")
        except Exception as outer:
            logger.error(f"Control loop error: {outer}")

        time.sleep(period)

    logger.info("Control loop thread exiting")


def start_control_loop():
    """Start the continuous control loop thread if not already running."""
    global control_loop_thread

    if control_loop_thread and control_loop_thread.is_alive():
        return

    control_loop_stop_event.clear()
    control_loop_thread = threading.Thread(target=control_loop, daemon=True)
    control_loop_thread.start()


def stop_control_loop(send_zero_setpoint: bool = False):
    """Stop the continuous control loop thread.

    If send_zero_setpoint is True and we are still connected, send a final
    zero-thrust setpoint for safety.
    """
    global control_loop_thread, control_state, thrust_animation

    # Stop any active thrust animation
    thrust_animation['active'] = False

    control_loop_stop_event.set()
    if control_loop_thread and control_loop_thread.is_alive():
        try:
            control_loop_thread.join(timeout=1.0)
        except Exception:
            # Best-effort; thread is daemon so it will exit on process end
            pass
    control_loop_thread = None

    if send_zero_setpoint:
        try:
            with cf_lock:
                if cf and connection_status['connected']:
                    control_state['roll'] = 0.0
                    control_state['pitch'] = 0.0
                    control_state['yaw'] = 0.0
                    control_state['thrust'] = 0
                    cf.commander.send_setpoint(0.0, 0.0, 0.0, 0)
        except Exception as e:
            logger.error(f"Error sending final zero-thrust setpoint: {e}")


# REST API Routes

@app.route('/')
def index():
    """Serve the main web interface."""
    response = send_from_directory(static_folder, 'index.html')
    # Disable caching to ensure latest version is served
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response


@app.route('/preview/<filename>')
def preview_image(filename):
    """Serve preview images."""
    try:
        # Use the global preview_folder_path variable
        preview_folder = preview_folder_path
        logger.info(f"Preview request for: {filename}, folder: {preview_folder}")
        
        if not os.path.exists(preview_folder):
            logger.error(f"Preview folder not found: {preview_folder}")
            return jsonify({'error': 'Preview folder not found'}), 404
        
        # URL decode the filename in case it's encoded
        from urllib.parse import unquote
        filename = unquote(filename)
        
        # Try exact match first
        image_path = os.path.join(preview_folder, filename)
        
        # If not found, try case-insensitive match (for case-sensitive filesystems)
        if not os.path.exists(image_path):
            available_files = os.listdir(preview_folder) if os.path.exists(preview_folder) else []
            # Try case-insensitive match
            for file in available_files:
                if file.lower() == filename.lower():
                    filename = file
                    image_path = os.path.join(preview_folder, filename)
                    logger.info(f"Found case-insensitive match: {file}")
                    break
        
        logger.info(f"Looking for image: {image_path}, exists: {os.path.exists(image_path)}")
        
        if not os.path.exists(image_path):
            logger.error(f"Preview image not found: {filename} at {image_path}")
            # List available files for debugging
            available_files = os.listdir(preview_folder) if os.path.exists(preview_folder) else []
            logger.error(f"Available files in preview folder: {available_files}")
            return jsonify({'error': 'Image not found', 'available_files': available_files}), 404
        
        # Determine MIME type
        mime_type = 'application/octet-stream'
        if filename.lower().endswith(('.jpg', '.jpeg')):
            mime_type = 'image/jpeg'
        elif filename.lower().endswith('.png'):
            mime_type = 'image/png'
        elif filename.lower().endswith('.gif'):
            mime_type = 'image/gif'
        
        # Use send_file with full path for better reliability
        logger.info(f"Serving image: {image_path} with MIME type: {mime_type}")
        response = send_file(
            image_path,
            mimetype=mime_type,
            as_attachment=False
        )
        
        # Add cache and CORS headers
        response.headers['Cache-Control'] = 'public, max-age=3600'
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET'
        
        logger.info(f"Successfully serving image: {filename}")
        return response
        
    except Exception as e:
        logger.error(f"Error serving preview image {filename}: {e}", exc_info=True)
        return jsonify({'error': str(e)}), 500


@app.route('/api/status', methods=['GET'])
def get_status():
    """Get connection status."""
    with cf_lock:
        return jsonify({
            'connected': connection_status['connected'],
            'uri': connection_status['uri'],
            'connecting': connection_status['connecting']
        })


@app.route('/api/scan', methods=['POST'])
def scan():
    """Scan for Crazyflie interfaces."""
    try:
        interfaces = cflib.crtp.scan_interfaces()
        result = []
        for uri, info in interfaces:
            result.append({
                'uri': uri,
                'info': info
            })
        return jsonify({
            'status': 'success',
            'interfaces': result
        })
    except Exception as e:
        logger.error(f"Scan error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


def reset_connection_timeout():
    """Reset connection state if timeout occurs."""
    global connection_status, connection_timeout_timer
    with cf_lock:
        if connection_status['connecting'] and not connection_status['connected']:
            logger.warning("Connection timeout - resetting connection state")
            connection_status['connecting'] = False
            socketio.emit('connection_status', {
                'event': 'failed',
                'uri': connection_status.get('uri'),
                'message': 'Connection timeout - no response from device'
            })
    connection_timeout_timer = None


@app.route('/api/connect', methods=['POST'])
def connect():
    """Connect to a Crazyflie."""
    global connection_status, cf, connection_timeout_timer
    
    data = request.json
    uri = data.get('uri')
    
    if not uri:
        return jsonify({
            'status': 'error',
            'message': 'URI is required'
        }), 400
    
    with cf_lock:
        if connection_status['connected']:
            return jsonify({
                'status': 'error',
                'message': 'Already connected. Please disconnect first.'
            }), 400
        
        if connection_status['connecting']:
            return jsonify({
                'status': 'error',
                'message': 'Connection already in progress'
            }), 400
    
    try:
        # Initialize Crazyflie if needed
        init_crazyflie()
        
        # Ensure callbacks are set up
        setup_callbacks()
        
        # Close any existing link before opening a new one
        if cf is not None:
            try:
                cf.close_link()
                # Give it a moment to close
                time.sleep(0.2)
            except Exception:
                pass  # Ignore errors if not connected
        
        # Cancel any existing timeout timer
        if connection_timeout_timer:
            connection_timeout_timer.cancel()
        
        # Set connecting state
        with cf_lock:
            connection_status['connecting'] = True
            connection_status['uri'] = uri
        
        # Set up connection timeout (10 seconds for UDP, 5 seconds for radio)
        timeout_seconds = 10 if uri.startswith('udp://') else 5
        connection_timeout_timer = threading.Timer(timeout_seconds, reset_connection_timeout)
        connection_timeout_timer.start()
        
        # Open the link (this is asynchronous)
        cf.open_link(uri)
        
        # Return immediately - connection status will be updated via callbacks
        return jsonify({
            'status': 'success',
            'message': 'Connection initiated',
            'uri': uri
        })
    except Exception as e:
        with cf_lock:
            connection_status['connecting'] = False
        if connection_timeout_timer:
            connection_timeout_timer.cancel()
            connection_timeout_timer = None
        logger.error(f"Connect error: {e}")
        import traceback
        logger.error(traceback.format_exc())
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/disconnect', methods=['POST'])
def disconnect():
    """Disconnect from Crazyflie."""
    global connection_status, cf, connection_timeout_timer, log_configs
    
    try:
        # Cancel timeout timer if it exists
        if connection_timeout_timer:
            connection_timeout_timer.cancel()
            connection_timeout_timer = None
        
        # Stop all log configs
        with cf_lock:
            if cf:
                # Stop all active log configs
                for name, lg in list(log_configs.items()):
                    try:
                        lg.stop()
                    except Exception as e:
                        logger.warning(f"Error stopping log {name}: {e}")
                log_configs.clear()
                
                if connection_status['connected'] or connection_status['connecting']:
                    try:
                        cf.close_link()
                        # Give it a moment to close gracefully
                        time.sleep(0.1)
                    except Exception as e:
                        logger.warning(f"Error closing link during disconnect: {e}")
                connection_status['connected'] = False
                connection_status['connecting'] = False
                connection_status['uri'] = None
        
        # Emit disconnected status immediately
        try:
            socketio.emit('connection_status', {
                'event': 'disconnected',
                'uri': None
            })
            logger.info("Emitted disconnected status event")
        except Exception as e:
            logger.error(f"Error emitting connection_status (disconnected): {e}")
        
        return jsonify({
            'status': 'success',
            'message': 'Disconnected'
        })
    except Exception as e:
        logger.error(f"Disconnect error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/control', methods=['POST'])
def control():
    """Update the current control setpoint.

    Note: The actual sending of setpoints is handled by a continuous control
    loop (see control_loop()), similar to cfclient's joystick behaviour. This
    endpoint only updates the desired roll/pitch/yaw/thrust values.
    """
    data = request.json
    roll = float(data.get('roll', 0.0))
    pitch = float(data.get('pitch', 0.0))
    yaw = float(data.get('yaw', 0.0))
    # Thrust must be an integer (PWM value 0-65535)
    thrust = int(data.get('thrust', 0))
    
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            # Ensure thrust is within valid range (0-65535)
            thrust = max(0, min(65535, thrust))

            # Update global control state; the control loop will pick this up
            control_state['roll'] = roll
            control_state['pitch'] = pitch
            control_state['yaw'] = yaw
            control_state['thrust'] = thrust
        
        return jsonify({
            'status': 'success'
        })
    except Exception as e:
        logger.error(f"Control error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/params', methods=['GET'])
def get_params():
    """Get all parameters."""
    return jsonify({
        'status': 'success',
        'params': param_toc,
        'cache': param_cache
    })


@app.route('/api/params/<path:param_name>', methods=['GET'])
def get_param(param_name):
    """Get a specific parameter value."""
    if param_name in param_cache:
        return jsonify({
            'status': 'success',
            'name': param_name,
            'value': param_cache[param_name]
        })
    else:
        return jsonify({
            'status': 'error',
            'message': 'Parameter not found'
        }), 404


@app.route('/api/params/<path:param_name>', methods=['POST'])
def set_param(param_name):
    """Set a parameter value."""
    data = request.json
    value = data.get('value')
    
    if value is None:
        return jsonify({
            'status': 'error',
            'message': 'Value is required'
        }), 400
    
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            cf.param.set_value(param_name, str(value))
            # Wait a bit for the update
            time.sleep(0.1)
            
            if param_name in param_cache:
                return jsonify({
                    'status': 'success',
                    'name': param_name,
                    'value': param_cache[param_name]
                })
            else:
                return jsonify({
                    'status': 'success',
                    'name': param_name,
                    'value': value
                })
    except Exception as e:
        logger.error(f"Set param error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/logs', methods=['GET'])
def get_log_toc():
    """Get log TOC."""
    return jsonify({
        'status': 'success',
        'logs': log_toc
    })


@app.route('/api/logs/create', methods=['POST'])
def create_log_config():
    """Create a log configuration."""
    data = request.json
    name = data.get('name')
    period = data.get('period', 10)
    variables = data.get('variables', [])
    
    if not name:
        return jsonify({
            'status': 'error',
            'message': 'Name is required'
        }), 400
    
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            # Check if log TOC is available
            if not log_toc or len(log_toc) == 0:
                return jsonify({
                    'status': 'error',
                    'message': 'Log TOC not loaded yet. Please wait for connection to complete.'
                }), 400
            
            lg = LogConfig(name, period)
            failed_vars = []
            for var in variables:
                try:
                    lg.add_variable(var)
                except Exception as e:
                    logger.warning(f"Failed to add variable {var}: {e}")
                    failed_vars.append(var)
            
            if failed_vars:
                return jsonify({
                    'status': 'error',
                    'message': f'Failed to add variables: {", ".join(failed_vars)}. They may not exist in the log TOC.'
                }), 400
            
            # Add callbacks BEFORE adding config (like cfclient does)
            lg.data_received_cb.add_callback(lambda ts, data, conf: on_log_data(ts, data, conf))
            lg.error_cb.add_callback(lambda conf, msg: on_log_error(conf, msg))
            
            log_configs[name] = lg
            cf.log.add_config(lg)
            lg.create()
            # Note: start() is called separately via /api/logs/<name>/start endpoint
            
            return jsonify({
                'status': 'success',
                'name': name
            })
    except Exception as e:
        logger.error(f"Create log config error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/logs/<name>/start', methods=['POST'])
def start_log(name):
    """Start a log configuration."""
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            if name not in log_configs:
                return jsonify({
                    'status': 'error',
                    'message': 'Log config not found'
                }), 404
            
            lg = log_configs[name]
            
            # Try to start the log. If it fails with "No such block id",
            # the log block was deleted and we need to recreate it first
            try:
                lg.start()
            except Exception as start_err:
                error_msg = str(start_err)
                # Check if error is about missing block id
                if "No such block" in error_msg or "block id" in error_msg.lower():
                    logger.info(f"Log block {name} was deleted, recreating before starting...")
                    try:
                        # Recreate the log block on the device
                        lg.create()
                        # Now try to start again
                        lg.start()
                        logger.info(f"Successfully recreated and started log {name}")
                    except Exception as create_err:
                        logger.error(f"Error recreating log {name}: {create_err}")
                        raise create_err
                else:
                    # Different error, re-raise it
                    raise start_err
            
            active_log_configs[name] = lg
            
            return jsonify({
                'status': 'success',
                'name': name
            })
    except Exception as e:
        logger.error(f"Start log error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/logs/<name>/stop', methods=['POST'])
def stop_log(name):
    """Stop a log configuration."""
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            if name not in log_configs:
                return jsonify({
                    'status': 'error',
                    'message': 'Log config not found'
                }), 404
            
            log_configs[name].stop()
            if name in active_log_configs:
                del active_log_configs[name]
            
            return jsonify({
                'status': 'success',
                'name': name
            })
    except Exception as e:
        logger.error(f"Stop log error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


def on_log_data(timestamp, data, log_config):
    """Callback when log data is received."""
    global current_pose
    
    # Store pose data for commander commands
    if log_config.name == 'pose_data':
        if 'stateEstimate.x' in data:
            current_pose['x'] = float(data['stateEstimate.x'])
        if 'stateEstimate.y' in data:
            current_pose['y'] = float(data['stateEstimate.y'])
        if 'stateEstimate.z' in data:
            current_pose['z'] = float(data['stateEstimate.z'])
        if 'stateEstimate.roll' in data:
            current_pose['roll'] = float(data['stateEstimate.roll'])
        if 'stateEstimate.pitch' in data:
            current_pose['pitch'] = float(data['stateEstimate.pitch'])
        if 'stateEstimate.yaw' in data:
            current_pose['yaw'] = float(data['stateEstimate.yaw'])
    
    socketio.emit('log_data', {
        'name': log_config.name,
        'timestamp': timestamp,
        'data': data
    })


def on_log_error(log_config, msg):
    """Callback when log error occurs."""
    logger.warning(f"Log error [{log_config.name}]: {msg}")
    # Emit error to frontend so it can handle it
    try:
        socketio.emit('log_error', {
            'name': log_config.name,
            'message': msg
        })
    except Exception as e:
        logger.error(f"Error emitting log_error: {e}")


@app.route('/api/commander', methods=['POST'])
def commander_command():
    """Send commander command."""
    data = request.json
    action = data.get('action')
    
    if not action:
        return jsonify({
            'status': 'error',
            'message': 'Action is required'
        }), 400
    
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            if action == 'takeoff':
                # Gradually increase thrust to 50000+
                current_thrust = control_state['thrust']
                target_thrust = 50000
                
                # Start gradual thrust increase
                thrust_animation['active'] = True
                thrust_animation['current'] = float(current_thrust)
                thrust_animation['target'] = float(target_thrust)
                thrust_animation['direction'] = 1  # Increase
                
                logger.info(f"Takeoff: gradually increasing thrust from {current_thrust} to {target_thrust}")
                
            elif action == 'land':
                # Gradually decrease thrust to 0
                current_thrust = control_state['thrust']
                target_thrust = 0
                
                # Start gradual thrust decrease
                thrust_animation['active'] = True
                thrust_animation['current'] = float(current_thrust)
                thrust_animation['target'] = float(target_thrust)
                thrust_animation['direction'] = -1  # Decrease
                
                logger.info(f"Land: gradually decreasing thrust from {current_thrust} to {target_thrust}")
            
            elif action in ['up', 'down', 'left', 'right', 'forward', 'back']:
                # For directional commands, use high-level commander if available
                if not hasattr(cf, 'high_level_commander') or cf.high_level_commander is None:
                    return jsonify({
                        'status': 'error',
                        'message': 'High-level commander not available. A positioning deck may be required.'
                    }), 400
                
                move_dist = 0.5
                move_vel = 0.5
                
                if action == 'up':
                    cf.high_level_commander.go_to(0, 0, move_dist, 0, move_dist / move_vel, relative=True)
                elif action == 'down':
                    cf.high_level_commander.go_to(0, 0, -move_dist, 0, move_dist / move_vel, relative=True)
                elif action == 'left':
                    cf.high_level_commander.go_to(0, move_dist, 0, 0, move_dist / move_vel, relative=True)
                elif action == 'right':
                    cf.high_level_commander.go_to(0, -move_dist, 0, 0, move_dist / move_vel, relative=True)
                elif action == 'forward':
                    cf.high_level_commander.go_to(move_dist, 0, 0, 0, move_dist / move_vel, relative=True)
                elif action == 'back':
                    cf.high_level_commander.go_to(-move_dist, 0, 0, 0, move_dist / move_vel, relative=True)
            else:
                return jsonify({
                    'status': 'error',
                    'message': 'Unknown action'
                }), 400
            
            return jsonify({
                'status': 'success',
                'action': action
            })
    except Exception as e:
        logger.error(f"Commander command error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/led', methods=['POST'])
def set_led():
    """Set LED color."""
    data = request.json
    index = data.get('index')
    r = data.get('r', 0)
    g = data.get('g', 0)
    b = data.get('b', 0)
    
    if index is None or index < 0 or index > 11:
        return jsonify({
            'status': 'error',
            'message': 'Invalid LED index (0-11)'
        }), 400
    
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            # Use LED ring memory driver
            from cflib.crazyflie.mem import MemoryElement
            mems = cf.mem.get_mems(MemoryElement.TYPE_DRIVER_LED)
            if len(mems) > 0:
                mem = mems[0]
                mem.leds[index].set(r, g, b)
                mem.write_data(cf.mem)
            
            return jsonify({
                'status': 'success',
                'index': index,
                'r': r,
                'g': g,
                'b': b
            })
    except Exception as e:
        logger.error(f"Set LED error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


def on_console_output(text):
    """Callback when console output is received."""
    socketio.emit('console_output', {
        'text': text
    })


def setup_console_callback():
    """Setup console callback."""
    global cf
    if cf:
        try:
            cf.console.receivedChar.add_callback(on_console_output)
        except Exception as e:
            logger.warning(f"Could not setup console callback: {e}")


def setup_crpt_packet_capture():
    """Setup CRTP packet capture for CRTP Shark."""
    try:
        # Note: Full CRTP packet capture would require intercepting the link layer
        # This is a placeholder that can be enhanced with actual packet capture
        # For now, we'll emit packets when they're available through the Crazyflie library
        pass
    except Exception as e:
        logger.warning(f"Could not setup CRTP packet capture: {e}")


def emit_crpt_packet(direction, port, channel, data, timestamp=None):
    """Emit a CRTP packet via WebSocket."""
    if timestamp is None:
        import time
        timestamp = int(time.time() * 1000)
    
    socketio.emit('crpt_packet', {
        'timestamp': timestamp,
        'direction': direction,  # 'TX' or 'RX'
        'port': port,
        'channel': channel,
        'data': data
    })


@app.route('/api/input/devices', methods=['GET'])
def get_input_devices():
    """Get available input devices."""
    try:
        from cfclient.utils.input import JoystickReader
        import os
        import json
        
        # Create a temporary joystick reader to get devices
        # Note: This might need SDL, so we handle errors gracefully
        try:
            jr = JoystickReader(do_device_discovery=False)
            devices = jr.available_devices()
            
            device_list = []
            input_path = os.path.join(cfclient.config_path, 'input')
            
            for device in devices:
                device_info = {
                    'name': device.name,
                    'id': device.id,
                    'mappings': []
                }
                
                # Get available mappings for this device
                if os.path.exists(input_path):
                    for file in os.listdir(input_path):
                        if file.endswith('.json'):
                            try:
                                with open(os.path.join(input_path, file), 'r') as f:
                                    mapping_data = json.load(f)
                                    # Check if mapping is compatible with device
                                    # For now, include all mappings
                                    device_info['mappings'].append(file.replace('.json', ''))
                            except Exception:
                                pass
                
                device_list.append(device_info)
            
            return jsonify({
                'status': 'success',
                'devices': device_list
            })
        except Exception as e:
            logger.warning(f"Could not get input devices: {e}")
            # Return empty list if input devices are not available
            return jsonify({
                'status': 'success',
                'devices': []
            })
    except Exception as e:
        logger.error(f"Get input devices error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/input/select', methods=['POST'])
def select_input_mapping():
    """Select input device and mapping."""
    data = request.json
    device = data.get('device')
    mapping = data.get('mapping')
    
    # This would need to integrate with the input device system
    return jsonify({
        'status': 'success',
        'device': device,
        'mapping': mapping
    })


@app.route('/api/input/configure', methods=['POST'])
def configure_input_device():
    """Start configuration mode for input device."""
    data = request.json
    device = data.get('device')
    
    # This would need to integrate with the input device system
    return jsonify({
        'status': 'success',
        'device': device
    })


@app.route('/api/input/profiles', methods=['GET'])
def get_input_profiles():
    """Get available input profiles."""
    try:
        import os
        import json
        profiles = []
        input_path = os.path.join(cfclient.config_path, 'input')
        if os.path.exists(input_path):
            for file in os.listdir(input_path):
                if file.endswith('.json'):
                    profiles.append(file.replace('.json', ''))
        return jsonify({
            'status': 'success',
            'profiles': profiles
        })
    except Exception as e:
        logger.error(f"Get input profiles error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/input/profiles/<profile_name>', methods=['DELETE'])
def delete_input_profile(profile_name):
    """Delete an input profile."""
    try:
        import os
        input_path = os.path.join(cfclient.config_path, 'input', f'{profile_name}.json')
        if os.path.exists(input_path):
            os.remove(input_path)
            return jsonify({
                'status': 'success'
            })
        else:
            return jsonify({
                'status': 'error',
                'message': 'Profile not found'
            }), 404
    except Exception as e:
        logger.error(f"Delete input profile error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/input/profiles/<profile_name>', methods=['GET'])
def get_input_profile(profile_name):
    """Get a specific input profile."""
    try:
        import os
        import json
        input_path = os.path.join(cfclient.config_path, 'input', f'{profile_name}.json')
        if os.path.exists(input_path):
            with open(input_path, 'r') as f:
                profile_data = json.load(f)
            return jsonify({
                'status': 'success',
                'profile': profile_data
            })
        else:
            return jsonify({
                'status': 'error',
                'message': 'Profile not found'
            }), 404
    except Exception as e:
        logger.error(f"Get input profile error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/input/profiles/<profile_name>', methods=['POST'])
def save_input_profile(profile_name):
    """Save an input profile."""
    try:
        import os
        import json
        data = request.json
        config = data.get('config', {})
        
        input_path = os.path.join(cfclient.config_path, 'input')
        os.makedirs(input_path, exist_ok=True)
        
        profile_path = os.path.join(input_path, f'{profile_name}.json')
        with open(profile_path, 'w') as f:
            json.dump(config, f, indent=2)
        
        return jsonify({
            'status': 'success',
            'message': f'Profile "{profile_name}" saved'
        })
    except Exception as e:
        logger.error(f"Save input profile error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/input/detect', methods=['POST'])
def detect_input():
    """Detect input from device (axis or button)."""
    try:
        from cfclient.utils.input import JoystickReader
        import time
        
        data = request.json
        device_name = data.get('device')
        input_type = data.get('type')  # 'axis' or 'button'
        input_name = data.get('name')  # 'roll', 'pitch', 'yaw', 'thrust', etc.
        
        if not device_name:
            return jsonify({
                'status': 'error',
                'message': 'Device name required'
            }), 400
        
        # Create joystick reader and find device
        jr = JoystickReader(do_device_discovery=False)
        devices = jr.available_devices()
        target_device = None
        
        for device in devices:
            if device.name == device_name:
                target_device = device
                break
        
        if not target_device:
            return jsonify({
                'status': 'error',
                'message': 'Device not found'
            }), 404
        
        # Open device and wait for input
        # Note: This is a simplified implementation
        # In a real scenario, you'd need to set up event listeners
        try:
            jr.open_device(target_device.id)
            time.sleep(0.5)  # Wait for device to be ready
            
            # For now, return a placeholder response
            # In a full implementation, this would listen for actual input events
            return jsonify({
                'status': 'success',
                'message': f'Listening for {input_type} input: {input_name}',
                'device': device_name,
                'type': input_type,
                'name': input_name
            })
        except Exception as e:
            logger.warning(f"Could not open device for detection: {e}")
            return jsonify({
                'status': 'error',
                'message': f'Could not open device: {str(e)}'
            }), 500
            
    except Exception as e:
        logger.error(f"Detect input error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/loco/start', methods=['POST'])
def start_loco_positioning():
    """Start Loco Positioning logging."""
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            # Create loco positioning log config
            lg = LogConfig('loco_positioning', 10)
            lg.add_variable('loco.x')
            lg.add_variable('loco.y')
            lg.add_variable('loco.z')
            lg.data_received_cb.add_callback(lambda ts, data, conf: on_log_data(ts, data, conf))
            log_configs['loco_positioning'] = lg
            cf.log.add_config(lg)
            lg.create()
            lg.start()
            
            return jsonify({
                'status': 'success'
            })
    except Exception as e:
        logger.error(f"Start loco positioning error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/loco/stop', methods=['POST'])
def stop_loco_positioning():
    """Stop Loco Positioning logging."""
    try:
        with cf_lock:
            if 'loco_positioning' in log_configs:
                log_configs['loco_positioning'].stop()
            return jsonify({
                'status': 'success'
            })
    except Exception as e:
        logger.error(f"Stop loco positioning error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/loco/reset', methods=['POST'])
def reset_loco_positioning():
    """Reset Loco Positioning."""
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            cf.param.set_value('loco.reset', '1')
            return jsonify({
                'status': 'success'
            })
    except Exception as e:
        logger.error(f"Reset loco positioning error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/lighthouse/config/load', methods=['POST'])
def load_lighthouse_config():
    """Load Lighthouse configuration."""
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            # This would need to integrate with Lighthouse config system
            return jsonify({
                'status': 'success',
                'message': 'Configuration loaded'
            })
    except Exception as e:
        logger.error(f"Load lighthouse config error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/lighthouse/config/save', methods=['POST'])
def save_lighthouse_config():
    """Save Lighthouse configuration."""
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            # This would need to integrate with Lighthouse config system
            return jsonify({
                'status': 'success',
                'message': 'Configuration saved'
            })
    except Exception as e:
        logger.error(f"Save lighthouse config error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/lighthouse/geometry', methods=['POST'])
def manage_lighthouse_geometry():
    """Manage Lighthouse base station geometry."""
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            # This would need to integrate with Lighthouse geometry management
            return jsonify({
                'status': 'success',
                'message': 'Geometry management opened'
            })
    except Exception as e:
        logger.error(f"Manage lighthouse geometry error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/lighthouse/system/type', methods=['POST'])
def change_lighthouse_system_type():
    """Change Lighthouse system type."""
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            data = request.json
            system_type = data.get('type')
            
            if system_type is None:
                return jsonify({
                    'status': 'error',
                    'message': 'System type is required'
                }), 400
            
            # This would need to integrate with Lighthouse system type change
            # For now, just acknowledge the request
            return jsonify({
                'status': 'success',
                'message': f'System type changed to {system_type}'
            })
    except Exception as e:
        logger.error(f"Change lighthouse system type error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/lighthouse/mode', methods=['POST'])
def manage_lighthouse_mode():
    """Manage Lighthouse base station mode."""
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            # This would need to integrate with Lighthouse mode management
            return jsonify({
                'status': 'success',
                'message': 'Mode management opened'
            })
    except Exception as e:
        logger.error(f"Manage lighthouse mode error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/bootloader/flash', methods=['POST'])
def flash_firmware():
    """Flash firmware via bootloader."""
    try:
        # This would need to integrate with bootloader system
        return jsonify({
            'status': 'error',
            'message': 'Bootloader functionality not yet implemented'
        }), 501
    except Exception as e:
        logger.error(f"Flash firmware error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/bootloader/reset', methods=['POST'])
def reset_to_bootloader():
    """Reset Crazyflie to bootloader mode."""
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            # This would need to integrate with bootloader system
            return jsonify({
                'status': 'success',
                'message': 'Reset to bootloader initiated'
            })
    except Exception as e:
        logger.error(f"Reset to bootloader error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/cf2/config', methods=['POST'])
def save_cf2_config():
    """Save Crazyflie 2.X configuration."""
    try:
        data = request.json
        # This would need to integrate with CF2 config system
        return jsonify({
            'status': 'success',
            'message': 'Configuration saved'
        })
    except Exception as e:
        logger.error(f"Save CF2 config error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/logconfigs', methods=['GET'])
def get_log_configs():
    """Get saved log configurations."""
    try:
        import os
        configs = []
        config_path = os.path.join(cfclient.config_path, 'logconfigs')
        if os.path.exists(config_path):
            for file in os.listdir(config_path):
                if file.endswith('.yaml') or file.endswith('.yml'):
                    configs.append({'name': file.replace('.yaml', '').replace('.yml', '')})
        return jsonify({
            'status': 'success',
            'configs': configs
        })
    except Exception as e:
        logger.error(f"Get log configs error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/crptshark/start', methods=['POST'])
def start_crptshark():
    """Start CRTP packet capture."""
    try:
        with cf_lock:
            if not cf or not connection_status['connected']:
                return jsonify({
                    'status': 'error',
                    'message': 'Not connected'
                }), 400
            
            # Enable CRTP packet capture
            # This would need to be implemented with actual packet interception
            return jsonify({
                'status': 'success',
                'message': 'CRTP packet capture started'
            })
    except Exception as e:
        logger.error(f"Start CRTP Shark error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/crptshark/stop', methods=['POST'])
def stop_crptshark():
    """Stop CRTP packet capture."""
    try:
        # Disable CRTP packet capture
        return jsonify({
            'status': 'success',
            'message': 'CRTP packet capture stopped'
        })
    except Exception as e:
        logger.error(f"Stop CRTP Shark error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


@app.route('/api/config/path', methods=['GET'])
def get_config_path():
    """Get config folder path."""
    try:
        return jsonify({
            'status': 'success',
            'path': cfclient.config_path
        })
    except Exception as e:
        logger.error(f"Get config path error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


def extract_relevant_context(query, knowledge_text, max_chars=2000):
    """Extract relevant context from knowledge base based on query."""
    if not knowledge_text:
        return ""
    
    query_lower = query.lower()
    query_words = set(re.findall(r'\b\w+\b', query_lower))
    
    # Split knowledge into sections (by headers)
    sections = re.split(r'(#+\s+.+?)(?=#+\s+|$)', knowledge_text, flags=re.DOTALL)
    
    # Score sections based on keyword matches
    scored_sections = []
    for i in range(0, len(sections) - 1, 2):
        if i + 1 < len(sections):
            header = sections[i]
            content = sections[i + 1]
            section_text = (header + content).lower()
            
            # Count matching words
            matches = sum(1 for word in query_words if word in section_text)
            if matches > 0:
                scored_sections.append((matches, header + content))
    
    # Sort by score and take top sections
    scored_sections.sort(reverse=True, key=lambda x: x[0])
    
    # Combine top sections up to max_chars
    context = ""
    for score, section in scored_sections[:5]:  # Top 5 sections
        if len(context) + len(section) <= max_chars:
            context += section + "\n\n"
        else:
            # Truncate section if needed
            remaining = max_chars - len(context)
            if remaining > 100:
                context += section[:remaining] + "..."
            break
    
    return context.strip()


def call_llm_api(user_message, context, language='en'):
    """Call LLM API (OpenAI or Gemini) with context."""
    system_prompt = f"""You are a helpful AI assistant for TerraTech, a Vietnamese STEM education company that produces DIY products like TerraDrone, TerraCar, and TerraShip.

Use the following knowledge base to answer questions accurately. If the answer is not in the knowledge base, provide a helpful response based on your general knowledge about drones, STEM education, and TerraTech products.

IMPORTANT FORMATTING INSTRUCTIONS:
- Format your responses using Markdown for better readability
- Use **bold** for product names (TerraDrone, TerraCar, TerraShip) and important terms
- Use bullet points (- or *) for lists
- Use line breaks to separate paragraphs
- Keep responses concise but informative
- Use numbered lists (1., 2., 3.) for step-by-step instructions
- Use > for quotes or important notes

Knowledge Base:
{context}

Respond in {'Vietnamese' if language == 'vi' else 'English'}."""
    
    user_prompt = f"""User question: {user_message}

Please provide a helpful and accurate answer based on the knowledge base above. Format your response using Markdown for better readability."""
    
    try:
        if LLM_PROVIDER == 'openai' and OPENAI_AVAILABLE and OPENAI_API_KEY:
            # Try new OpenAI client API first (v1.0+)
            try:
                from openai import OpenAI
                client = OpenAI(api_key=OPENAI_API_KEY)
                response = client.chat.completions.create(
                    model="gpt-3.5-turbo",
                    messages=[
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_prompt}
                    ],
                    temperature=0.7,
                    max_tokens=500
                )
                return response.choices[0].message.content.strip()
            except ImportError:
                # Fallback to old API
                response = openai.ChatCompletion.create(
                    model="gpt-3.5-turbo",
                    messages=[
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_prompt}
                    ],
                    temperature=0.7,
                    max_tokens=500
                )
                return response.choices[0].message.content.strip()
        
        elif LLM_PROVIDER == 'gemini' and GEMINI_AVAILABLE and GEMINI_API_KEY:
            # Try gemini-2.0-flash-exp first, fallback to gemini-1.5-flash if quota exceeded
            try:
                model = genai.GenerativeModel('gemini-2.0-flash-exp')
                full_prompt = f"{system_prompt}\n\n{user_prompt}"
                response = model.generate_content(full_prompt)
                return response.text.strip()
            except Exception as e:
                error_str = str(e)
                # Check if it's a quota error
                if '429' in error_str or 'quota' in error_str.lower() or 'Quota exceeded' in error_str:
                    logger.warning(f"Gemini-2.0-flash-exp quota exceeded, trying gemini-1.5-flash: {e}")
                    try:
                        # Fallback to gemini-1.5-flash which might have different quota
                        model = genai.GenerativeModel('gemini-1.5-flash')
                        full_prompt = f"{system_prompt}\n\n{user_prompt}"
                        response = model.generate_content(full_prompt)
                        return response.text.strip()
                    except Exception as e2:
                        logger.error(f"Both Gemini models failed. Last error: {e2}")
                        raise e2
                else:
                    # Re-raise if it's not a quota error
                    raise
        
        else:
            # Fallback to simple response
            return None
            
    except Exception as e:
        error_str = str(e)
        # Provide more specific error messages
        if '429' in error_str or 'quota' in error_str.lower() or 'Quota exceeded' in error_str:
            logger.error(f"LLM API quota exceeded: {e}")
            # Extract retry delay if available
            if 'retry in' in error_str.lower() or 'retry_delay' in error_str.lower():
                logger.error("Please wait before retrying or upgrade your API plan.")
            # Return a special indicator for quota errors
            return "QUOTA_ERROR"
        else:
            logger.error(f"LLM API error: {e}")
        return None


@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    """Handle chatbot messages with LLM integration."""
    try:
        data = request.json
        message = data.get('message', '').strip()
        language = data.get('language', 'en')  # 'en' or 'vi'
        
        if not message:
            return jsonify({
                'status': 'error',
                'message': 'Message is required'
            }), 400
        
        # Extract relevant context from knowledge base
        context = ""
        if knowledge_base:
            context = extract_relevant_context(message, knowledge_base)
        
        # Get web page context (product information)
        web_context = """TerraTech Products:
- TerraDrone: Self-assembly nano quadcopter with ESP32-S3, Wi-Fi control, multiple flight modes. Price: $48.
- TerraCar: Self-assembly autonomous vehicle with smart navigation. Price: $28.
- TerraShip: Self-assembly watercraft with waterproof capability and GPS navigation. Price: $28.

All products use eco-friendly wood materials, share a standard control board, and will be connected through a single Android/iOS app."""
        
        full_context = f"{web_context}\n\n{context}" if context else web_context
        
        # Call LLM API
        response = call_llm_api(message, full_context, language)
        
        if response:
            # Check if it's a quota error indicator
            if response == "QUOTA_ERROR":
                error_msg = 'API quota exceeded. Please wait a moment and try again, or upgrade your API plan.'
                if language == 'vi':
                    error_msg = 'Đã vượt quá hạn mức API. Vui lòng đợi một chút và thử lại, hoặc nâng cấp gói API của bạn.'
                return jsonify({
                    'status': 'error',
                    'message': error_msg
                }), 429
            return jsonify({
                'status': 'success',
                'response': response
            })
        else:
            # LLM API not available or failed
            error_msg = 'LLM service is not available. Please configure OPENAI_API_KEY or GEMINI_API_KEY environment variable.'
            if language == 'vi':
                error_msg = 'Dịch vụ LLM không khả dụng. Vui lòng cấu hình OPENAI_API_KEY hoặc GEMINI_API_KEY.'
            return jsonify({
                'status': 'error',
                'message': error_msg
            }), 503
            
    except Exception as e:
        logger.error(f"Chatbot error: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500


# WebSocket events

@socketio.on('connect')
def handle_connect():
    """Handle client connection."""
    logger.info('Client connected')
    emit('connection_status', {
        'event': 'status',
        'connected': connection_status['connected'],
        'uri': connection_status['uri']
    })


@socketio.on('disconnect')
def handle_disconnect():
    """Handle client disconnection."""
    logger.info('Client disconnected')


def main():
    """Main entry point for the web server."""
    import argparse
    
    parser = argparse.ArgumentParser(prog="cfweb")
    parser.add_argument("-p", "--port", action="store", dest="port", type=int,
                        default=5000,
                        help="Port to run the web server on (default: 5000)")
    parser.add_argument("-H", "--host", action="store", dest="host", type=str,
                        default="0.0.0.0",
                        help="Host to bind to (default: 0.0.0.0)")
    parser.add_argument("-d", "--debug", action="store_true", dest="debug",
                        help="Enable debug output")
    args = parser.parse_args()
    
    if args.debug:
        logging.basicConfig(level=logging.DEBUG)
    else:
        logging.basicConfig(level=logging.INFO)
    
    # Initialize Crazyflie
    init_crazyflie()
    
    # Handle SIGINT and SIGTERM gracefully
    def signal_handler(sig, frame):
        logger.info('Shutting down...')
        
        # Close Crazyflie connection in a separate thread to avoid blocking
        def cleanup():
            with cf_lock:
                if cf:
                    try:
                        if connection_status['connected'] or connection_status['connecting']:
                            logger.info('Closing Crazyflie link...')
                            cf.close_link()
                            # Give it a moment to close, but with timeout
                            time.sleep(0.3)
                    except Exception as e:
                        logger.warning(f"Error closing link: {e}")
            logger.info('Cleanup complete')
        
        # Run cleanup in a thread with timeout
        cleanup_thread = threading.Thread(target=cleanup, daemon=True)
        cleanup_thread.start()
        cleanup_thread.join(timeout=1.0)  # Wait max 1 second for cleanup
        
        # Force exit immediately to avoid hanging
        logger.info('Exiting...')
        os._exit(0)
    
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    try:
        logger.info(f"Starting Crazyflie web interface on http://{args.host}:{args.port}")
        # Use use_reloader=False to avoid issues with signal handling
        socketio.run(app, host=args.host, port=args.port, debug=args.debug, 
                    allow_unsafe_werkzeug=True, use_reloader=False)
    except KeyboardInterrupt:
        logger.info('Keyboard interrupt received')
        signal_handler(None, None)
    except Exception as e:
        logger.error(f"Server error: {e}")
        signal_handler(None, None)

