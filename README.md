# Temperature and Humidity

Work in progress.

Browser based interface to view temperature and humidity data from an Arduino with a DHT22 sensor.

## Features

Track minute by minute temperature and humidity data via website and / or [MagicMirrorModule](https://github.com/mimiflynn/MMM-temphumidity).

## Purpose and Objectives and Stuff

Overall, I started this project in an attempt to collect large amounts of data and render SVG's via React and D3 on the server and update the UI in the browser upon the arrival of new data points.

I would like to thank my darling orchid as the true inspiration for this project. Although neglect is highly suggested in regards to orchid care, I've decided to further explore environmental variables to better understand my plant. (Update: may orchid rest in peace).

## Requirements

- NodeJS
- Arduino
- DHT22 sensor
- Arduino IDE
- [DHT Sensor Library](https://github.com/mimiflynn/DHT-sensor-library)
- [ArduionJson Library](https://github.com/bblanchon/ArduinoJson)
- [Adafruit sensor library](https://github.com/adafruit/Adafruit_Sensor)

Optional
- Raspberry Pi 3 (server for app)

## Usage

- Hook up Arduino and DHT22 sensor hardware.
- Load firmware onto Arduino
- `cd nodejs`
- `npm install`
- `npm start` to begin collecting temperature and humidity data and outputting values from the database
- if no errors in the console, go to `localhost:3000` and view data

## Credits

https://plot.ly/arduino/dht22-temperature-tutorial/

https://learn.adafruit.com/dht

https://github.com/bblanchon/ArduinoJson

## Todo

replace underscore with lodash

update front-end to more modern whatnot

