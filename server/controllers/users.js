'use strict';
const User = require('../models/user');

module.exports = {
  findAll: (req, res, next) => {
    User.find({})
      .select('email')
      .exec((err, users) => {
        if (err) return next(err);
        res.json(users);
      });
  },
  
  follow: (req, res, next) => {
    User.findOne({ _id: req.user._id })
      .exec((err, user) => {
        if (err) return next(err);

        if (user.following.indexOf(req.body.uid) !== -1 || req.user._id === req.body.uid) {
          err = new Error('Conflict');
          err.status = 409;
          return next(err);
        }

        User.findOne({ _id: req.body.uid })
          .exec((err, requestedUser) => {
            if (err) return next(err);

            if (!requestedUser) {
              err = new Error('Unprocessable Entity');
              err.status = 422;
              return next(err);
            }

            user.following.push(requestedUser._id);

            user.save(err => {
              if (err) return next(err);
              return res.json(user);
            });
          });
      });
  },
};
