'use strict';
const NODE_ENV = process.env.NODE_ENV || 'default';
const config = require(`./config/${NODE_ENV}.js`);

module.exports = config;
