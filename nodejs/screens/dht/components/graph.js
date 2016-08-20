var React = require('react');
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

var d3 = require('d3');

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
  console.log('d', d);
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

// module.exports = reactD3;


function InitChart () {
  var data = [{
      "sale": "202",
      "year": "2000"
  }, {
      "sale": "215",
      "year": "2002"
  }, {
      "sale": "179",
      "year": "2004"
  }, {
      "sale": "199",
      "year": "2006"
  }, {
      "sale": "134",
      "year": "2008"
  }, {
      "sale": "176",
      "year": "2010"
  }];


  var data2 = [{
      "sale": "152",
      "year": "2000"
  }, {
      "sale": "189",
      "year": "2002"
  }, {
      "sale": "179",
      "year": "2004"
  }, {
      "sale": "199",
      "year": "2006"
  }, {
      "sale": "134",
      "year": "2008"
  }, {
      "sale": "176",
      "year": "2010"
  }];

  var vis = d3.select("#visualisation"),
      WIDTH = 1000,
      HEIGHT = 500,
      MARGINS = {
          top: 20,
          right: 20,
          bottom: 20,
          left: 50
      },

      xScale = d3.scaleLinear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2000, 2010]),

      yScale = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134, 215]),

      xAxis = d3.axisBottom()
      .scale(xScale),

      yAxis = d3.axisLeft()
      .scale(yScale);

  vis.append("svg:g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);

  vis.append("svg:g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .call(yAxis);

  var lineGen = d3.line()
      .x(function (d) {
          return xScale(d.year);
      })
      .y(function (d) {
          return yScale(d.sale);
      });

  vis.append('svg:path')
      .attr('d', lineGen(data))
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

  vis.append('svg:path')
      .attr('d', lineGen(data2))
      .attr('stroke', 'blue')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
}

var chartD3 = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  componentDidMount: function () {
    console.log('init chart');
    InitChart();
  },
  render: function () {
    return (
      <div id="mar" />
    );
  }
});

module.exports = chartD3
