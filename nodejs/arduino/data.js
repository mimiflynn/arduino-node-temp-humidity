const serialport = require('serialport');
const SerialPort = serialport.SerialPort;
const parsers = serialport.parsers;
const _ = require('lodash');

// attempt to hackily add data to the things
var dht = require('../server/controllers/dht');

// var port = '/dev/cu.usbmodem1411';
var port = '/dev/cu.usbmodemFD1321';

// create config file for this
const arduino = new SerialPort(port, {
  baudrate: 9600,
  parser: parsers.readline('\r\n')
});

const getArduinoPort = () => {
  let com = '';

  serialport.list((err, ports) => {
    com = _.findWhere(ports, { manufacturer: 'Arduino (www.arduino.cc)' });
  });

  return com;
};

// returns dht data json
const getData = () => {
  arduino.on('open', () => {
    console.log('Port Open');
  });

  arduino.on('data', (data) => {
    console.log(data);
    dht.create({body: JSON.parse(data)});
  });
}

module.exports = getData;
