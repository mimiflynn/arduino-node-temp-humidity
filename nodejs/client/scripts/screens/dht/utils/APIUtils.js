var xhr = require('../../../lib/xhr');
var API = require('../constants/constants').API;
var ActionTypes = require('../constants/constants').ActionTypes;
var ServerActionCreators = require('../actions/ServerActionCreators');

var APIUtils = {
  loadDht: function () {
    xhr.getJSON(API + '/dht/latest', function (err, res) {
      ServerActionCreators.loadedDht(res);
    });
  },

  deleteDht: function (dht) {
    xhr.deleteJSON(API + '/dht/' + dht.id, function (err, res) {
      ServerActionCreators.deletedDht(dht);
    });
  }
};

module.exports = APIUtils;
