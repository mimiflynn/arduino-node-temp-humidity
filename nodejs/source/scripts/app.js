var React = require('react');
// var render = require('react-dom').render;
var render = React.render;
var Dht = require('./screens/dht/index');

render(
  <Dht />,
  document.getElementById('app')
);

