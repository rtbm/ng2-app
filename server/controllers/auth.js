'use strict';
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const User = require('../models/user');
const redisClient = require('redis').createClient();
const mailer = require('../utils/mailer');

module.exports = {
  signup: (req, res, next) => {
    if (req.body.password !== req.body.password_confirm) {
      const err = new Error('Bad Request');
      err.status = 400;
      return next(err);
    }

    User.findOne({
      email: req.body.email,
    }).exec((err, _user) => {
      if (err) return next(err);

      if (_user) {
        err = new Error('Conflict');
        err.status = 409;
        return next(err);
      }

      const __user = new User();

      __user.email = req.body.email;
      __user.password = req.body.password;

      __user.save((err, user) => {
        if (err) return next(err);

        return res.json({
          id_token: jwt.sign({
            _id: user._id,
            email: user.email,
          }, process.env.SECRET),
        });
      });
    });
  },

  signin: (req, res, next) => {
    User.findOne({
      email: req.body.email,
    }).select('email password').exec((err, user) => {
      if (err) return next(err);

      if (!user) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      user.verifyPassword(req.body.password, (err, isValid) => {
        if (err) return next(err);

        if (!isValid) {
          err = new Error('Unprocessable Entity');
          err.status = 422;
          return next(err);
        }

        return res.json({
          id_token: jwt.sign({
            _id: user._id,
            email: user.email,
          }, process.env.SECRET),
        });
      });
    });
  },

  changePassword: (req, res, next) => {
    if (!req.body.token) {
      const err = new Error('Bad Request');
      err.status = 400;
      return next(err);
    }

    redisClient.get(req.body.token, (err, email) => {
      if (err) return next(err);

      if (!email) {
        err = new Error('Request Timeout');
        err.status = 408;
        return next(err);
      }

      User.findOne({
        email,
      }).exec((err, _user) => {
        if (err) return next(err);

        if (!user) {
          err = new Error('Unprocessable Entity');
          err.status = 422;
          return next(err);
        }

        _user.password = req.body.password;

        _user.save((err, user) => {
          if (err) return next(err);

          redisClient.del(req.body.token);

          return res.json({
            _id: user._id,
            email: user.email
          });
        });
      });
    });
  },

  resetPassword: (req, res, next) => {
    User.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) return next(err);

      if (!user) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      const token = md5(new Date().getTime() + user.email + process.env.SECRET);

      redisClient.set(token, user.email);
      redisClient.expire(token, 600);

      const body = `
        <p>Hi!</p>
        <p><a href="${process.env.BASE_URL}user/change-password/${token}">Click here</a>
          to change Your password.</p>
        <p>Notice that this link will expire in 10 minutes.</p>
      `;

      mailer.send(user.email, 'Reset password request', body, err => {
        if (err) return next(err);

        return res.json({
          email: user.email,
        });
      });
    });
  },
};
