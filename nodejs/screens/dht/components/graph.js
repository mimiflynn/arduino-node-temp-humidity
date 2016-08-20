var React = require('react');
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

var chartSeries = [
  {
    field: 'hif',
    name: 'Dew Point',
    color: '#ff0000'
  }, {
    field: 'fahrenheit',
    name: 'Temp',
    color: '#0000ff'
  }
];

var x = function (d) {
  return d.fahrenheit;
}

var margins = {left: 100, right: 100, top: 50, bottom: 50};

// ToDo - set up isomorphic rendering
// refer to home.index
// already rendering from server
// need to re-render in client with data for chart
var reactD3 = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  render: function () {
    return (
      <Chart
        title="Title of Chart"
        width={ 900 }
        height={ 300 }
        margins={ margins }
        >
        <LineChart
          width={ 900 }
          height={ 300 }
          margins={ margins }
          data={ this.props.data }
          chartSeries={ chartSeries }
          x={ x }
        />
      </Chart>
    );
  }
});

module.exports = reactD3;
