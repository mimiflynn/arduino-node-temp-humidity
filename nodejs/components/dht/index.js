var React = require('react');

var DefaultLayout = require('../layouts/default');

var List = require('./list');

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
        <List data={ this.props.data } />
      </DefaultLayout>
    );
  }
});
