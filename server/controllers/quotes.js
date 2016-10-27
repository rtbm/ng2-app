'use strict';
const Quote = require('../models/quote');

module.exports = {
  findAll: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    let query = {
      $or: [{
        owner: {
          $in: req.user.following,
        },
        private: false,
      }, {
        owner: req.user._id,
      }],
    };

    let projection;

    if (req.query.q) {
      query = Object.assign({}, query, {
        $text: {
          $search: req.query.q,
        },
      });

      projection = {
        score: {
          $meta: 'textScore',
        },
      };
    }

    Quote.find(query, projection)
      .sort('-createdAt')
      .populate({
        path: 'owner',
        select: 'username profile.first_name profile.last_name',
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

    const _quote = new Quote({
      name: req.body.name,
      content: req.body.content,
      url: req.body.url,
      private: req.body.private,
      owner: req.user._id,
    });

    _quote.save((err, __quote) => {
      if (err) return next(err);

      Quote.populate(__quote, {
        path: 'owner',
        select: 'username profile.first_name profile.last_name',
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
    }).exec((err, _quote) => {
      if (err) return next(err);

      if (!_quote) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      _quote.name = req.body.name;
      _quote.content = req.body.content;
      _quote.url = req.body.url;
      _quote.private = req.body.private;

      _quote.save((err, __quote) => {
        if (err) return next(err);

        Quote.populate(__quote, {
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

  recommend: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Quote.update({
      _id: req.params.quoteId,
      private: false,
    }, {
      $addToSet: {
        recommended: req.user._id,
      },
    }).exec(err => {
      if (err) return next(err);

      Quote.findById(req.params.quoteId)
        .populate({
          path: 'owner',
          select: 'username profile.first_name profile.last_name',
        }).exec((err, quote) => {
          if (err) return next(err);
          return res.json(quote);
        });
    });
  },

  unrecommend: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Quote.update({
      _id: req.params.quoteId,
      private: false,
    }, {
      $pull: {
        recommended: req.user._id,
      },
    }).exec(err => {
      if (err) return next(err);

      Quote.findById(req.params.quoteId)
        .populate({
          path: 'owner',
          select: 'username profile.first_name profile.last_name',
        }).exec((err, quote) => {
          if (err) return next(err);
          return res.json(quote);
        });
    });
  },
};
