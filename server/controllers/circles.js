'use strict';
const Circle = require('../models/circle');
const User = require('../models/user');

module.exports = {
  findAll: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

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

    circle.save((err, circle) => {
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

      circle.save((err, circle) => {
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

  saveUser: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    if (req.user._id === req.body.user._id) {
      const err = new Error('Bad Request');
      err.status = 400;
      return next(err);
    }

    Circle.findById(req.params.circleId)
      .exec((err, circle) => {
        if (err) return next(err);

        if (!circle) {
          err = new Error('Unprocessable Entity');
          err.status = 422;
          return next(err);
        }

        if (circle.users.indexOf(req.body.user._id) !== -1) {
          err = new Error('Conflict');
          err.status = 409;
          return next(err);
        }

        User.findById(req.body.user._id)
          .exec((err, user) => {
            if (err) return next(err);

            if (!user) {
              const err = new Error('Unprocessable Entity');
              err.status = 422;
              return next(err);
            }

            circle.users.push(user._id);

            circle.save((err, circle) => {
              if (err) return next(err);
              return res.json(circle);
            });
          });
      });
  },

  removeUser: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    Circle.findById(req.params.circleId)
      .exec((err, circle) => {
        if (err) return next(err);

        if (!circle) {
          err = new Error('Unprocessable Entity');
          err.status = 422;
          return next(err);
        }

        if (circle.users.indexOf(req.params.userId) === -1) {
          err = new Error('Bad Request');
          err.status = 400;
          return next(err);
        }

        circle.users = circle.users.filter(n => n.toString() !== req.params.userId);

        circle.save((err, circle) => {
          if (err) next(err);
          return res.json(circle);
        });
      });
  }
};
