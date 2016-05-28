
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var config = require('config');

var utils = require('../../lib/utils');

var Schema = mongoose.Schema;

/**
 * Dht Schema
 *
  root["humidity"] = h;
  root["celsius"] = t;
  root["fahrenheit"] = f;
  root["heat-index-celsius"] = hic;
  root["heat-index-fahrenheit"] = hif;
 */

var DhtSchema = new Schema({
  humidity: {type : String, default : '', trim : true},
  celsius: {type : String, default : '', trim : true},
  fahrenheit: {type : String, default : '', trim : true},
  hic: {type : String, default : '', trim : true},
  hif: {type : String, default : '', trim : true},
  date : {type : Date, default : Date.now}
});

/**
 * Statics
 */

DhtSchema.statics = {

  /**
   * Find dht by id
   *
   * @param {ObjectId} id
   * @param {Function} cb
   * @api private
   */

  load: function (id, cb) {
    this.findOne({ _id : id })
      .exec(cb);
  },

  /**
   * List dht
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */

  list: function (options, cb) {
    var criteria = options.criteria || {}

    this.find(criteria)
      .sort({'date': -1}) // sort by date
      .limit(options.perPage)
      .skip(options.perPage * options.page)
      .exec(cb);
  }
}

mongoose.model('Dht', DhtSchema);
