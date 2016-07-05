'use strict';
const winston = require('winston');

module.exports = {
  cspViolationReport: (req, res, next) => {
    winston.error('CSP Violation: ', req.body || 'No data received!');
    return res.status(204).end();
  },
};
