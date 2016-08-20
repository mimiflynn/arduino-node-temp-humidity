var ActionTypes = require('../constants/constants').ActionTypes;
var AppDispatcher = require('../dispatcher/dispatcher');
var APIUtils = require('../utils/APIUtils');

var ViewActionCreators = {
  loadDht: function () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_DHT
    });
    APIUtils.loadDht();
  },

  deleteDht: function (dht) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.DHT_DELETED,
      dht: dht
    });
    APIUtils.deleteDht(dht);
  }
};

module.exports = ViewActionCreators;
