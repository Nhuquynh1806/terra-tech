# TerraDrone Web Interface

> **Tiếng Việt**: Xem [README.vi.md](README.vi.md) để đọc phiên bản tiếng Việt.

A modern web-based interface for controlling TerraDrone devices.

## Features

- **Connection Management**: Scan and connect to TerraDrone devices
- **Flight Control**: Virtual joystick, gamepad, and keyboard controls for drone flight
- **Command-based Flight**: Take off, land, and directional movement controls
- **Parameter Management**: View and modify drone parameters in real-time
- **Log Data**: Monitor and view log data from the drone
- **Real-time Updates**: WebSocket-based real-time status updates
- **Data Visualization**: Attitude indicator, flight data plotting, and motor thrust monitoring
- **Multilingual Support**: English and Vietnamese language support
- **Multiple Themes**: Light, Dark, and Sunset themes
- **Shop Integration**: Built-in e-commerce page for TerraDrone products

## Installation

The web interface is included with the cfclient package. Install dependencies:

```bash
pip install -e .
```

## Usage

Start the web server:

```bash
cfweb
```

Or with custom host and port:

```bash
cfweb --host 0.0.0.0 --port 5000
```

Then open your web browser and navigate to:

```
http://localhost:5000
```

## Controls

### Virtual Joystick
- Click and drag on the joystick canvas to control roll and pitch
- Mouse wheel or arrow keys (↑/↓) to adjust thrust
- Q/A keys to control yaw

### Keyboard Shortcuts
- **Arrow Up**: Increase thrust
- **Arrow Down**: Decrease thrust
- **Q**: Increase yaw
- **A**: Decrease yaw
- **Emergency Stop**: Resets all controls to zero

## API Endpoints

The web interface provides a REST API:

- `GET /api/status` - Get connection status
- `POST /api/scan` - Scan for TerraDrone interfaces
- `POST /api/connect` - Connect to a TerraDrone (requires `uri` in body)
- `POST /api/disconnect` - Disconnect from TerraDrone
- `POST /api/control` - Send control command (requires `roll`, `pitch`, `yaw`, `thrust` in body)
- `POST /api/commander` - Send command-based flight commands (takeoff, land, up, down, left, right, forward, back)
- `GET /api/params` - Get all parameters
- `GET /api/params/<name>` - Get a specific parameter
- `POST /api/params/<name>` - Set a parameter (requires `value` in body)
- `GET /api/logs` - Get log TOC
- `POST /api/logs/create` - Create a log configuration
- `POST /api/logs/<name>/start` - Start a log configuration
- `POST /api/logs/<name>/stop` - Stop a log configuration

## WebSocket Events

The server emits the following WebSocket events:

- `connection_status` - Connection state changes
- `link_quality` - Link quality updates
- `param_updated` - Parameter value updates
- `tocs_updated` - TOC (Table of Contents) updates
- `log_data` - Log data from active log configurations

## Development

To run in development mode with debug output:

```bash
cfweb --debug
```

