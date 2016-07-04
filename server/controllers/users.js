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
};
