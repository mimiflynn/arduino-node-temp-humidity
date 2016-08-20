var AppDispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/constants').ActionTypes;
var assign = Object.assign;

var events = new EventEmitter();
var CHANGE_EVENT = 'CHANGE';

var state = {
  dht: [],
  loaded: false
};

function setState (newState) {
  assign(state, newState);
  events.emit(CHANGE_EVENT);
}

var DhtStore = {
  addChangeListener: function (fn) {
    events.addListener(CHANGE_EVENT, fn);
  },

  removeChangeListener: function (fn) {
    events.removeListener(CHANGE_EVENT, fn);
  },

  getState: function () {
    return state;
  }
};

DhtStore.dispatchToken = AppDispatcher.register(function (payload) {
  var action = payload.action;

  if (action.type === ActionTypes.DHT_LOADED) {
    setState({
      loaded: true,
      dht: action.dht
    });
  }

  if (action.type === ActionTypes.DHT_DELETED) {
    var newDht = state.dht.filter(function (dht) {
      return dht.id !== action.dht.id;
    });
    setState({ dht: newDht });
  }
});

module.exports = DhtStore;
