'use strict';
const jwt = require('express-jwt');
const config = require('../config');

module.exports = {
  check: jwt({
    secret: config.secret,
  }),
};
