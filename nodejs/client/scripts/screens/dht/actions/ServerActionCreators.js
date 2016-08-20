var ActionTypes = require('../constants/constants').ActionTypes;
var AppDispatcher = require('../dispatcher/dispatcher');

var ServerActionCreators = {
  loadedDht: function (dht) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.DHT_LOADED,
      dht: dht
    });
  },

  deletedDht: function (dht) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.DHT_DELETED,
      dht: dht
    });
  }
};

module.exports = ServerActionCreators;
