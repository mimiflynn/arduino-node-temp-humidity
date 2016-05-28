var mongoose = require('mongoose');
var Dht = mongoose.model('Dht');
var utils = require('../../lib/utils');
var extend = require('util')._extend;

/**
 * Load
 */

exports.load = function (req, res, next, id){
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

exports.all = function (req, res) {
  Dht.find().sort('-created').exec(function (err, dht) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the dht'
      });
    }
    res.jsonp(dht);
  });
};

/**
 * Create an dht
 * Upload an image
 */

exports.create = function (req, res) {
  var dht = new dht(req.body);
  var images;

  if (typeof req.files !== 'undefined') {
    images = [req.files.image];
  } else {
    images = undefined;
  }

  dht.user = req.user;
  dht.uploadAndSave(images, function (err) {
    if (!err) {
      req.flash('success', 'Successfully created dht!');
      return res.redirect('/dht/'+dht._id);
    }
    res.render('dht/new', {
      title: 'New dht',
      isAuthenticated: req.isAuthenticated(),
      dht: dht,
      errors: utils.errors(err.errors || err)
    });
  });
};

/**
 * Update dht
 */

exports.update = function (req, res){
  var dht = req.dht;
  var images = req.files.image
    ? [req.files.image]
    : undefined;

  // make sure no one changes the user
  delete req.body.user;
  dht = extend(dht, req.body);

  dht.uploadAndSave(images, function (err) {
    if (!err) {
      return res.redirect('/dht/' + dht._id);
    }

    res.render('dht/edit', {
      title: 'Edit dht',
      isAuthenticated: req.isAuthenticated(),
      dht: dht,
      errors: utils.errors(err.errors || err)
    });
  });
};

/**
 * Delete an dht
 */

exports.destroy = function (req, res){
  var dht = req.dht;
  dht.remove(function (err){
    req.flash('info', 'Deleted successfully');
    res.redirect('/dht');
  });
};

/**
 * ----------- Server side pages ----------- *
 */

exports.index = function (req, res){
  var page = (req.params.page > 0 ? req.params.page : 1) - 1;
  var perPage = 30;
  var options = {
    perPage: perPage,
    page: page
  };

  Dht.list(options, function (err, dht) {
    if (err) return res.render('500');
    Dht.count().exec(function (err, count) {
      res.render('dht/index', {
        title: 'dht',
        isAuthenticated: req.isAuthenticated(),
        dht: dht,
        page: page + 1,
        pages: Math.ceil(count / perPage)
      });
    });
  });
};

/**
 * New dht
 */

exports.new = function (req, res){
  res.render('dht/new', {
    title: 'New dht',
    isAuthenticated: req.isAuthenticated(),
    dht: new dht({})
  });
};

/**
 * Edit an dht
 */

exports.edit = function (req, res) {
  res.render('dht/edit', {
    title: 'Edit ' + req.dht.title,
    isAuthenticated: req.isAuthenticated(),
    dht: req.dht
  });
};


/**
 * Show
 */

exports.show = function (req, res){
  res.render('dht/show', {
    title: req.dht.title,
    isAuthenticated: req.isAuthenticated(),
    dht: req.dht
  });
};
