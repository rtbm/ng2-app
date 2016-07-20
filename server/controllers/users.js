'use strict';
const User = require('../models/user');

module.exports = {
  findAll: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    User.find({})
      .select('email profile')
      .exec((err, users) => {
        if (err) return next(err);
        res.json(users);
      });
  },

  read: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    User.findById(req.params.userId)
      .select('profile').exec((err, user) => {
      if (err) return next(err);

      if (!user) {
        err = new Error('Not Found');
        err.status = 404;
        return next(err);
      }

      return res.json(user);
    });
  },

  update: (req, res, next) => {
    if (!req.user || !req.user._id) {
      const err = new Error('Unauthorized');
      err.status = 401;
      return next(err);
    }

    if (req.user._id !== req.params.userId) {
      const err = new Error('Forbidden');
      err.status = 403;
      return next(err);
    }

    User.findById(req.params.userId)
      .exec((err, user) => {
        if (err) return next(err);

        if (!user) {
          err = new Error('Not Found');
          err.status = 404;
          return next(err);
        }

        user.profile.first_name = req.body.profile.first_name;
        user.profile.last_name = req.body.profile.last_name;
        user.profile.bio = req.body.profile.bio;

        user.save((err, user) => {
          if (err) return next(err);
          return res.json(user);
        });
      });
  },
};
