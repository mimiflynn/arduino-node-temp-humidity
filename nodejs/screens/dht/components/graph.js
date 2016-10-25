var React = require('react');

var initChart = require('../../../lib/graph.js');

var chartD3 = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  componentDidMount: function () {
    initChart({
      dht: this.props.data,
      width: 1000,
      height: 500,
      margins : {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
      },
      yLeftDomain: [68, 82],
      yRightDomain: [20, 50]
    });
  },
  render: function () {
    return (
      <h2>Temperature and humidity over time</h2>
    );
  }
});

module.exports = chartD3;
