const config = require('./../config/app.config');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const User = require('./../models/user');
const redisClient = require('redis').createClient();
const mailer = require('./../utils/mailer');

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
          id_token: jwt.sign({
            _id: user._id,
            email: user.email
          }, config.secretSalt)
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
        err.status = 404;
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
          }, config.secretSalt)
        });
      });
    });
  },

  changePassword: (req, res, next) => {
    User.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) { return next(err); }

      if (!user) {
        err = new Error('Unprocessable Entity');
        err.status = 404;
        return next(err);
      }
      
      user.password = req.body.password;

      user.save((err) => {
        if (err) { return next(err); }
        return res.end();
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
        err.status = 404;
        return next(err);
      }

      const token = md5(new Date().getTime() + config.secretSalt);
      redisClient.set(req.body.email, token);

      const body = `
        <p>Hi!</p>
        <p><a href="http://localhost:8080/user/change-password/${token}">Click here</a> to change Your password.</p>
      `;
      
      mailer.send(req.body.email, 'Reset password request', body, (err, result) => {
        if (err) { next(err); }
        return res.json(result);
      });
    });
  }
};
