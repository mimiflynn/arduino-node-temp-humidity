var React = require('react');
var Dom = require('react-dom');
var Dht = require('./screens/dht/index');

Dom.render(
  <Dht />,
  document.getElementById('graph')
);

