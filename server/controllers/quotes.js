'use strict';
const Quote = require('../models/quote');
const Circle = require('../models/circle');
const mongoose = require('mongoose');

module.exports = {
  findAll: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Quote.find({ owner: req.user._id })
      .exec((err, quotes) => {
        if (err) return next(err);
        return res.json(quotes);
      });
  },

  save: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    const quote = new Quote({
      name: req.body.name,
      content: req.body.content,
      url: req.body.url,
      owner: req.user._id,
    });

    quote.save((err, quote) => {
      if (err) return next(err);
      return res.json(quote);
    });
  },

  read: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Quote.findOne({
      _id: req.params.quoteId,
      owner: req.user._id,
    }).exec((err, quote) => {
      if (err) return next(err);

      if (!quote) {
        err = new Error('Not Found');
        err.status = 404;
        return next(err);
      }

      return res.json(quote);
    });
  },

  update: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Quote.findOne({
      _id: req.params.quoteId,
      owner: req.user._id,
    }).exec((err, quote) => {
      if (err) return next(err);

      if (!quote) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      quote.name = req.body.name;
      quote.content = req.body.content;
      quote.url = req.body.url;

      quote.save((err, quote) => {
        if (err) return next(err);
        return res.json(quote);
      });
    });
  },

  remove: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Quote.findOneAndRemove({
      _id: req.params.quoteId,
      owner: req.user._id,
    }).exec((err, quote) => {
      if (err) return next(err);

      if (!quote) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      return res.json(quote);
    });
  },

  search: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Quote.find({
      $text: {
        $search: req.query.q
      },
      owner: req.user._id,
    }, {
      score: {
        $meta: 'textScore',
      },
    }).sort({
      score: {
        $meta: 'textScore',
      },
    }).exec((err, quotes) => {
      if (err) return next(err);

      if (!quotes) {
        err = new Error('Not Found');
        err.status = 404;
        return next(err);
      }

      return res.json(quotes);
    });
  },

  feed: (req, res, next) => {
    Circle.aggregate([{
      $match: {
        owner: mongoose.Types.ObjectId(req.user._id),
      },
    }, {
      $unwind: '$users',
    }, {
      $group: {
        _id: null,
        _circle: {
          $addToSet: '$users',
        },
      },
    }, {
      $project: {
        _id: 0,
        users: '$_circle',
      },
    }]).exec((err, circle) => {
      if (err) return next(err);

      const owners = !!circle[0]
        ? [req.user._id, ...circle[0].users]
        : [req.user._id];

      Quote.find({
        $or: [{
          owner: { $in: owners },
        }, {
          owner: req.user._id,
        }],
      }).exec((err, quotes) => {
        if (err) return next(err);
        return res.json(quotes);
      });
    });
  }
};
