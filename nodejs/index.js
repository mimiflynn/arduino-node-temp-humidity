const serialport = require('serialport');
const SerialPort = serialport.SerialPort;
const parsers = serialport.parsers;
const _ = require('underscore');

const arduino = new SerialPort('/dev/cu.usbmodem1421', {
  baudrate: 9600,
  parser: parsers.readline('\r\n')
});

const getArduinoPort = () => {
  let com = '';

  serialport.list((err, ports) => {
    com = _.findWhere(ports, { manufacturer: 'Arduino (www.arduino.cc)' });
  });

  return com;
}

arduino.on('open', () => {
  console.log('Port Open');
});

arduino.on('data', (data) => {
  console.log(data);
});
