var React = require('react');
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

var DefaultLayout = require('../layouts/default');

var List = require('./list');

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

var x = function(d) {
  return d.index;
}

var margins = {left: 100, right: 100, top: 50, bottom: 50};

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    user: React.PropTypes.object,
    isAuthenticated: React.PropTypes.bool,
    data: React.PropTypes.array
  },
  render: function () {
    return (
      <DefaultLayout title={ this.props.title } user={ this.props.user } isAuthenticated={ this.props.isAuthenticated }>
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
        <List data={ this.props.data } />
      </DefaultLayout>
    );
  }
});
