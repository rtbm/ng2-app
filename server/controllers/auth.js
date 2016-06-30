'use strict';
const config = require('../config');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const User = require('../models/user');
const redisClient = require('redis').createClient();
const mailer = require('../utils/mailer');

module.exports = {
  signup: (req, res, next) => {
    User.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) { return next(err); }

      if (user) {
        err = new Error('Conflict');
        err.status = 409;
        return next(err);
      }

      if (req.body.password !== req.body.password_confirm) {
        err = new Error('Bad request');
        err.status = 400;
        return next(err);
      }

      const newUser = new User();

      newUser.email = req.body.email;
      newUser.password = req.body.password;

      newUser.save((err) => {
        if (err) { return next(err); }

        return res.json({
          id_token: jwt.sign({
            _id: newUser._id,
            email: newUser.email
          }, config.secret)
        });
      });
    });
  },

  signin: (req, res, next) => {
    User.findOne({
      email: req.body.email,
    }).exec((err, user) => {
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
          id_token: jwt.sign({
            _id: user._id,
            email: user.email
          }, config.secret)
        });
      });
    });
  },

  changePassword: (req, res, next) => {
    if(!req.body.token) {
      let err = new Error('Bad Request');
      err.status = 400;
      return next(err);
    }

    redisClient.get(req.body.token, (err, email) => {
      redisClient.del(req.body.token);

      if (err) { next(err); }

      if (!email) {
        err = new Error('Request Timeout');
        err.status = 408;
        return next(err);
      }

      User.findOne({
        email,
      }).exec((err, user) => {
        if (err) { return next(err); }

        if (!user) {
          err = new Error('Unprocessable Entity');
          err.status = 422;
          return next(err);
        }

        user.password = req.body.password;

        user.save((err) => {
          if (err) { return next(err); }
          return res.json({});
        });
      });
    });
  },

  resetPassword: (req, res, next) => {
    User.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) { return next(err); }

      if (!user) {
        err = new Error('Unprocessable Entity');
        err.status = 422;
        return next(err);
      }

      const token = md5(new Date().getTime() + user.email + config.secretSalt);
      redisClient.set(token, user.email);
      redisClient.expire(token, 600);

      const body = `
        <p>Hi!</p>
        <p><a href="${config.baseUrl}user/change-password/${token}">Click here</a>
          to change Your password.</p>
        <p>Notice that this link will expire in 10 minutes.</p>
      `;

      mailer.send(user.email, 'Reset password request', body, (err, result) => {
        if (err) { next(err); }
        return res.json(result);
      });
    });
  }
};
