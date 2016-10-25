module.exports = {
  API: window.location.href + 'api',

  ActionTypes: {
    DHT_LOADED: 'DHT_LOADED',
    LOAD_DHT: 'LOAD_DHT',
    DHT_DELETED: 'DHT_DELETED'
  },

  PayloadSources: {
    SERVER_ACTION: 'SERVER_ACTION',
    VIEW_ACTION: 'VIEW_ACTION'
  }
};
