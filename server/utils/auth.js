'use strict';
const jwt = require('express-jwt');

module.exports = {
  check: jwt({
    secret: process.env.SECRET,
  }),
};
