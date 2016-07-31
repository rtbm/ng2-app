'use strict';
const jwt = require('express-jwt');
const User = require('../models/user');

module.exports = {
  check: (req, res, next) => {
    jwt({ secret: process.env.SECRET })(req, res, err => {
      if (err) return next(err);

      User.findById(req.user._id)
        .exec((err, user) => {
          if (err) return next(err);

          if (!user) {
            err = new Error('Unauthorized');
            err.status = 401;
            return next(err);
          }

          req.user = user;

          next();
        });
    });
  },
};
