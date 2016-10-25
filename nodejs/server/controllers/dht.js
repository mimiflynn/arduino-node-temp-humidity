var mongoose = require('mongoose');
var Dht = mongoose.model('Dht');
var utils = require('../../lib/utils');

/**
 * Load
 */

exports.load = (req, res, next, id) => {
  Dht.load(id, function (err, dht) {
    if (err) return next(err);
    if (!dht) return next(new Error('not found'));
    req.dht = dht;
    next();
  });
};


/**
 * ----------- API ----------- *
 */

/**
 * Return all dht
 */

exports.all = (req, res) => {
  Dht.find().sort('-created').exec(function (err, dht) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the dht'
      });
    }
    res.jsonp(dht);
  });
};

exports.latest = (req, res) => {
  var page = (req.params.page > 0 ? req.params.page : 1) - 1;
  var perPage = 120;
  var options = {
    perPage: perPage,
    page: page
  };

  Dht.list(options, (err, dht) => {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the dht'
      });
    }
    Dht.find().limit(perPage).sort({_id:1}).exec((err, count) => {
      res.jsonp(dht);
    });
  });
};

/**
 * ----------- Server side pages ----------- *
 */

exports.index = (req, res) => {
  var page = (req.params.page > 0 ? req.params.page : 1) - 1;
  var perPage = 120;
  var options = {
    perPage: perPage,
    page: page
  };

  Dht.list(options, (err, dht) => {
    if (err) return res.render('500');
    Dht.find().limit(perPage).sort({_id:1}).exec((err, count) => {
      res.render('dht/index', {
        title: 'Sky Shack Atmospheric Monitor',
        isAuthenticated: req.isAuthenticated(),
        data: dht,
        page: page + 1,
        pages: Math.ceil(count / perPage)
      });
    });
  });
};



/**
 * ----------- crud ----------- *
 */

/**
 * New dht
 */

exports.new = (req, res) =>{
  res.render('dht/new', {
    title: 'New dht',
    isAuthenticated: req.isAuthenticated(),
    dht: new dht({})
  });
};

/**
 * Create an dht
 */

exports.create = (req, res) => {
  var dht = new Dht(req.body);
  dht.save((err) => {
    console.error(err);
  });
};

/**
 * Edit an dht
 */

exports.edit = (req, res) => {
  res.render('dht/edit', {
    title: 'Edit ' + req.dht.title,
    isAuthenticated: req.isAuthenticated(),
    dht: req.dht
  });
};

/**
 * Delete an dht
 */

exports.destroy = (req, res) => {
  var dht = req.dht;
  dht.remove((err) => {
    req.flash('info', 'Deleted successfully');
    res.redirect('/dht');
  });
};

/**
 * Show
 */

exports.show = (req, res) => {
  res.render('dht/show', {
    title: req.dht.title,
    isAuthenticated: req.isAuthenticated(),
    dht: req.dht
  });
};
