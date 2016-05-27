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
      return res.json(article);
    });
  },

  save: (req, res, next) => {
    const article = new Article({
      content: req.content,
    });

    article.save(err => {
      if (err) return next(err);
      return res.json(article);
    });
  },

  update: (req, res, next) => { // TODO: Create update action
  },

  remove: (req, res, next) => { // TODO: Create remove action
  },
};
