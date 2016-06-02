var React = require('react');

module.exports = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },
  render: function () {
    return (
      <p> { this.props.data.hif } </p>
    );
  }
});
