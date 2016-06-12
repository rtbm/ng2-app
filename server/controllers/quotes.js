const Quote = require('../models/quote');

module.exports = {
  findAll: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Quote.find({ owner: req.user._id }, (err, quotes) => {
      if (err) return next(err);
      return res.json(quotes);
    });
  },

  read: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Quote.findOne({ _id: req.params.quoteId, owner: req.user._id }, (err, quote) => {
      if (err) return next(err);

      if (!quote) {
        err = new Error('Not Found');
        err.status = 404;
        return next(err);
      }

      return res.json(quote);
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

    quote.save(err => {
      if (err) return next(err);
      return res.json(quote);
    });
  },

  update: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Quote.findById(req.params.quoteId, (err, quote) => {
      if (err) return next(err);

      if (!quote) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      quote.name = req.body.name;
      quote.content = req.body.content;
      quote.url = req.body.url;

      quote.save(err => {
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

    Quote.findByIdAndRemove(req.params.quoteId, err => {
      if (err) return next(err);
      return res.json({ _id: req.params.quoteId });
    });
  },
};
