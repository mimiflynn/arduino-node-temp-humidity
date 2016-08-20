var React = require('react');

var Store = require('./stores/store');
var ViewActionCreators = require('./actions/ViewActionCreators');

var Graph = require('../../../../screens/dht/components/graph');

module.exports = React.createClass({
  componentDidMount: function () {
    Store.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadDht();
  },
  componentWillUnmount () {
    Store.removeChangeListener(this.handleStoreChange);
  },
  handleStoreChange: function () {
    this.setState(Store.getState());
  },
  render: function () {
    console.log('STATE', this.state);
    var data = (this.state && this.state.dht) ? this.state.dht : window.data;
    return (
      <Graph data={ data } />
    );
  }
});

