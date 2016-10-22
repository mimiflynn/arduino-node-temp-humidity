var React = require('react');
var d3 = require('d3');

function InitChart (dht) {

  // Get time range from data
  // assuming data is sorted in decending order

  var timeDomain = [new Date(dht[119].date), new Date(dht[0].date)];

  var vis = d3.select("#visualization"),
      WIDTH = 1000,
      HEIGHT = 500,
      MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
      },

      xScale = d3.scaleTime().range([MARGINS.left, WIDTH - MARGINS.right]).domain(timeDomain),

      yScaleLeft = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([68, 82]),

      yScaleRight = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([20, 50]),

      xAxis = d3.axisBottom()
        .scale(xScale),

      yAxisLeft = d3.axisLeft()
        .scale(yScaleLeft),

      yAxisRight = d3.axisRight()
        .scale(yScaleRight);

  var lineGenTemp = d3.line()
      .x(function (d) {
          return xScale(new Date(d.date));
      })
      .y(function (d) {
          return yScaleLeft(d.fahrenheit);
      });

  // var lineGenDP = d3.line()
  //     .x(function (d) {
  //         return xScale(new Date(d.date));
  //     })
  //     .y(function (d) {
  //         return yScaleLeft(d.hif);
  //     });

   var lineGenHum = d3.line()
      .x(function (d) {
          return xScale(new Date(d.date));
      })
      .y(function (d) {
          return yScaleRight(d.humidity);
      });

  vis.append("svg:g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
      .call(xAxis);

  vis.append("svg:g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + (MARGINS.left) + ",0)")
      .attr('stroke', 'red')
      .call(yAxisLeft);

    vis.append("svg:g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + (WIDTH - MARGINS.right) + ",0)")
      .attr('stroke', 'blue')
      .call(yAxisRight);

  vis.append('svg:path')
      .attr('d', lineGenTemp(dht))
      .attr('stroke', 'red')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

  // vis.append('svg:path')
  //     .attr('d', lineGenDP(dht))
  //     .attr('stroke', 'green')
  //     .attr('stroke-width', 2)
  //     .attr('fill', 'none');

  vis.append('svg:path')
      .attr('d', lineGenHum(dht))
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
    InitChart(this.props.data);
  },
  render: function () {
    return (
      <h2>Temperature and humidity over time</h2>
    );
  }
});

module.exports = chartD3
