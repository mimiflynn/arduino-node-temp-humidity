var React = require('react');

var Store = require('../stores/store.js');
var ViewActionCreators = require('../actions/ViewActionCreators');

var List = require('../../../../components/dht/list');

module.exports = React.createClass({
  getInitialState: function () {
    return Store.getState();
  },

  componentDidMount: function () {
    Store.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loads();
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this.handleStoreChange);
  },

  handleStoreChange: function () {
    this.setState(Store.getState());
  },

  delete: function (data) {
    ViewActionCreators.delete(data);
  },

  render: function () {
    if (this.state.data.loaded) {
      return (
        <List data={this.state.data} />
      );
    } else {
      return (
        <List data={window.data} />
      );
    }
  }
});

