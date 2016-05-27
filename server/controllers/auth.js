const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/user');

module.exports = {
  signup: (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) { return next(err); }

      if (user) {
        err = new Error('Conflict');
        err.status = 409;
        return next(err);
      }

      if (req.body.password !== req.body.password_confirm) {
        err = new Error('Validation failed');
        err.status = 500;
        return next(err);
      }

      user = new User();
      user.email = req.body.email;
      user.password = req.body.password;

      user.save((err) => {
        if (err) { return next(err); }

        return res.json({
          token: jwt.sign({
            _id: user._id,
            email: user.email
          }, config.secret)
        });
      });
    });
  },

  signin: (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) { return next(err); }

      if (!user) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      user.verifyPassword(req.body.password, (err, result) => {
        if (err) { return next(err); }

        if (!result) {
          err = new Error('Unprocessable Entity');
          err.status = 422;
          return next(err);
        }

        return res.json({
          token: jwt.sign({
            _id: user._id,
            email: user.email
          }, config.secret)
        });
      });
    });
  },
};
