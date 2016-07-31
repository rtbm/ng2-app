'use strict';
const Quote = require('../models/quote');

module.exports = {
  findAll: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Quote.find({
      owner: req.user._id
    }).populate({
      path: 'owner',
      select: 'profile.first_name profile.last_name',
    }).exec((err, quotes) => {
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

    const newQuote = new Quote({
      name: req.body.name,
      content: req.body.content,
      url: req.body.url,
      owner: req.user._id,
    });

    newQuote.save((err, savedQuote) => {
      if (err) return next(err);

      Quote.populate(savedQuote, {
        path: 'owner',
        select: 'profile.first_name profile.last_name',
      }, (err, quote) => {
        if (err) return next(err);

        return res.json(quote);
      });
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
    }).populate({
      path: 'owner',
      select: 'profile.first_name profile.last_name',
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
    }).exec((err, foundQuote) => {
      if (err) return next(err);

      if (!foundQuote) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      foundQuote.name = req.body.name;
      foundQuote.content = req.body.content;
      foundQuote.url = req.body.url;

      foundQuote.save((err, updatedQuote) => {
        if (err) return next(err);

        Quote.populate(updatedQuote, {
          path: 'owner',
          select: 'profile.first_name profile.last_name',
        }, (err, quote) => {
          if (err) return next(err);
          return res.json(quote);
        });
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
    }).exec((err, removedQuote) => {
      if (err) return next(err);

      if (!removedQuote) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      return res.json(removedQuote);
    });
  },
};
