const Article = require('../models/article');

module.exports = {
  findAll: (req, res, next) => {
    Article.find({}, (err, articles) => {
      if(err) return next(err);
      return res.json(articles);
    });
  },

  read: (req, res, next) => {
    Article.findById(req.params.articleId, (err, article) => {
      if(err) return next(err);

      if (!article) {
        err = new Error('Not Found');
        err.status = 404;
        return next(err);
      }

      return res.json(article);
    });
  },

  save: (req, res, next) => {
    if(!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    const article = new Article({
      name: req.body.name,
      content: req.body.content,
    });

    article.save(err => {
      if (err) return next(err);
      return res.json(article);
    });
  },

  update: (req, res, next) => {
    Article.findById(req.params.articleId, (err, article) => {
      if(err) return next(err);

      if (!article) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      article.name = req.body.name;
      article.content = req.body.content;

      article.save(err => {
        if(err) return next(err);

        return res.json(article);
      });
    });
  },

  remove: (req, res, next) => { // TODO: Create remove action
  },
};
