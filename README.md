# TerraDrone Web Interface

> **Tiếng Việt**: Xem [README.vi.md](README.vi.md) để đọc phiên bản tiếng Việt.

TerraDrone is a nano quadcopter platform designed for research, education, and development. This project provides a modern web-based interface for controlling and monitoring TerraDrone devices, built with Flask and featuring real-time flight control, data visualization, and comprehensive drone management capabilities.

## Features

- **Modern Web Interface**: Beautiful, responsive web UI with multilingual support (English/Vietnamese)
- **Real-time Flight Control**: Live gamepad input, state estimation, and motor thrust monitoring
- **Command-based Flight**: Take off, land, and directional controls with smooth animations
- **Data Visualization**: Real-time attitude indicator, flight data plotting, and parameter monitoring
- **Multiple Themes**: Light, Dark, and Sunset themes for comfortable viewing
- **Shop Integration**: Built-in e-commerce page for TerraDrone products
- **TerraAI Integration**: Learning assistant chatbot for educational purposes

## Technical Specifications

- **Microcontroller**: ESP32-S3 (32-bit RISC-V dual-core, up to 240MHz)
- **Communication**: Wi-Fi 802.11 b/g/n, Bluetooth 5.0
- **Sensors**: MPU6050 6-axis IMU (3-axis accelerometer + 3-axis gyroscope)
- **Motors**: 4 coreless motors with 2.7:1 thrust-to-weight ratio
- **Flight Time**: Up to 15 minutes with 2000 mAh Li-Po battery
- **Control Range**: Up to 100 meters via Wi-Fi

## Installation

### Prerequisites

- Python 3.8 or higher
- pip package manager
- The forked [cflib](https://github.com/leeebo/crazyflie-lib-python) library

### Setup

1. Clone the repository:

```bash
git clone https://github.com/qljz1993/crazyflie-clients-python.git
cd crazyflie-clients-python
```

2. Install cflib (if developing with the library):

Follow the [cflib installation guide](https://github.com/leeebo/crazyflie-lib-python) to install the required library.

3. Install TerraDrone client from source:

```bash
pip3 install -e .
```

## Running the Application

### Desktop Client

Run the traditional desktop client:

```bash
cfclient
```

### Web Interface

Start the Flask web server:

```bash
cd src/cfweb
python3 server.py
```

Then open your browser and navigate to:

```
http://localhost:5000
```

## Web Interface Features

### Flight Control
- Basic and advanced flight control parameters
- Real-time gamepad input monitoring
- State estimation display (position, orientation)
- Motor thrust indicators
- Command-based flight controls (Take off, Land, directional movement)

### Data Monitoring
- Live attitude indicator
- Flight data plotting
- Parameter monitoring and adjustment
- Log block management

### Additional Features
- Connection management with quick connect
- Input device configuration
- LED ring control
- Lighthouse positioning
- PID tuning interface
- Shop page for TerraDrone products

## Project Structure

```
crazyflie-clients-python/
├── src/
│   └── cfweb/
│       ├── static/
│       │   ├── index.html      # Main web interface
│       │   ├── app.js          # Frontend JavaScript
│       │   └── style.css       # Styling and themes
│       └── server.py           # Flask backend server
└── README.md
```

## Communication Protocol

The communication with TerraDrone devices and the implementation of the CRTP (Crazy Real-Time Protocol) to control the drone is handled by the modified [cflib](https://github.com/leeebo/crazyflie-lib-python) library.

## Documentation

- **Original Crazyflie Client Documentation**: https://www.bitcraze.io/documentation/repository/crazyflie-clients-python/master/

## About TerraDrone

TerraDrone is manufactured by **TerraTech** and features:
- **Material**: Aircraft Plywood frame
- **Recommended Age**: 12-18 years
- **Features**: Wi-Fi control via mobile app, TerraAI learning assistant chatbot, programmable via Arduino IDE
- **Flight Modes**: Stabilize, Altitude Hold, Position Hold

## License

This project is available for research and development purposes.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Support

For technical support, visit the TerraDrone shop page in the web interface or contact support via the TerraAI chatbot.
