var React = require('react');
var LineChart = require('react-d3-basic').LineChart;

var DefaultLayout = require('../layouts/default');

var List = require('./list');

var chartSeries = [
  {
    field: 'hif',
    name: 'Dew Point in F',
    color: '#ff7f0e',
    style: {
      "strokeWidth": 2,
      "strokeOpacity": .2,
      "fillOpacity": .2
    }
  }, {
    field: 'fahrenheit',
    name: 'Temp in F',
    color: '#000099',
    style: {
      "strokeWidth": 2,
      "strokeOpacity": .2,
      "fillOpacity": .2
    }
  }
];

var x = function(d) {
  return d.index;
}


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
        <LineChart
          width= { 900 }
          height= { 300 }
          data= { this.props.data }
          chartSeries= { chartSeries }
          x= { x }
        />
        <List data={ this.props.data } />
      </DefaultLayout>
    );
  }
});
