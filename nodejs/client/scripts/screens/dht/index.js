var React = require('react');


var Graph = require('../../../../screens/dht/components/graph');

module.exports = React.createClass({
  render: function () {
    return (
      <Graph data={ window.data } />
    );
  }
});

