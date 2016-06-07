var React = require('react');

var DefaultLayout = require('../layouts/default');

var Graph = require('./components/graph');
var List = require('./components/list');

// ToDo - set up isomorphic rendering
// refer to home.index
// already rendering from server
// need to re-render in client with data for chart
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
        <Graph data={ this.props.data } />
        <List data={ this.props.data } />
      </DefaultLayout>
    );
  }
});

