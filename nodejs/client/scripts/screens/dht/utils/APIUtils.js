import xhr from '../../../lib/xhr';
import { API, ActionTypes } from '../constants/constants';
import ServerActionCreators from '../actions/ServerActionCreators';

var APIUtils = {
  loadDht: () => {
    xhr.getJSON(API + '/dht/latest', function (err, res) {
      ServerActionCreators.loadedDht(res);
    });
  },

  deleteDht: (dht) => {
    xhr.deleteJSON(API + '/dht/' + dht.id, function (err, res) {
      ServerActionCreators.deletedDht(dht);
    });
  }
};

module.exports = APIUtils;
