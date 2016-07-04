'use strict';
const Circle = require('../models/circle');

module.exports = {
  findAll: (req, res, next) => {
    Circle.find({ owner: req.user._id })
      .exec((err, circles) => {
        if (err) return next(err);
        return res.json(circles);
      });
  },

  save: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    const circle = new Circle({
      name: req.body.name,
      owner: req.user._id,
    });

    circle.save(err => {
      if (err) return next(err);
      return res.json(circle);
    });
  },

  read: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Circle.findOne({
      _id: req.params.circleId,
      owner: req.user._id
    }).exec((err, circle) => {
      if (err) return next(err);

      if (!circle) {
        err = new Error('Not Found');
        err.status = 404;
        return next(err);
      }

      return res.json(circle);
    });
  },

  update: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Circle.findOne({
      _id: req.params.circleId,
      owner: req.user._id,
    }).exec((err, circle) => {
      if (err) return next(err);

      if (!circle) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      circle.name = req.body.name;

      circle.save(err => {
        if (err) return next(err);
        return res.json(circle);
      });
    });
  },

  remove: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Circle.findOneAndRemove({
      _id: req.params.circleId,
      owner: req.user._id,
    }).exec((err, circle) => {
      if (err) return next(err);

      if (!circle) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      return res.json(circle);
    });
  },
};
