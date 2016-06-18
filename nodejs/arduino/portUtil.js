const serialport = require('serialport');

const getPorts = () => {
  let com = '';

  serialport.list((err, ports) => {
    if (err) {
      console.log(err);
    } else {
      ports.forEach((port) => {
        console.log(port);
      });
    }
  });

  return com;
};

getPorts();
