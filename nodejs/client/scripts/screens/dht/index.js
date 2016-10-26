var React = require('react');

var Store = require('./stores/store');
var ViewActionCreators = require('./actions/ViewActionCreators');

var Graph = require('../../../../screens/dht/components/graph');

module.exports = React.createClass({
  componentDidMount () {
    Store.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadDht();
    this.pollDht();
  },

  componentWillUnmount () {
    Store.removeChangeListener(this.handleStoreChange);
    clearInterval(this.pollInterval);
  },

  pollDht () {
    this.pollInterval = window.setInterval(() => {
      ViewActionCreators.loadDht();
    }, 60005);
  },

  handleStoreChange () {
    this.setState(Store.getState());
  },

  render () {
    console.log('STATE', this.state);
    var data = (this.state && this.state.dht) ? this.state.dht : window.data;
    return (
      <Graph data={ data } />
    );
  }
});

