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
      .select('email')
      .exec((err, users) => {
        if (err) return next(err);
        res.json(users);
      });
  },
};
