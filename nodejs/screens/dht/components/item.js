var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },
  render: function () {
    return (
      <dl>
        <dt>Date:</dt>
        <dd>{ moment(this.props.data.date).format('MMMM Do YYYY, h:mm:ss a') }</dd>
        <dt>Temp: </dt>
        <dd>{ this.props.data.fahrenheit }</dd>
        <dt>Dew Point:</dt>
        <dd>{ this.props.data.hif }</dd>
        <dt>Humidity</dt>
        <dd>{ this.props.data.humidity }</dd>
      </dl>
    );
  }
});
