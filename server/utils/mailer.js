'use strict';
const smtpConfig = require('./../config/app.config').smtp;
const nodemailerTransport = require('nodemailer').createTransport(smtpConfig.server);
const winston = require('winston');

module.exports = {
  send: (to, subject, html, options, callback) => {
    let mailOptions = {
      from: smtpConfig.from,
      to,
      subject,
      html,
    };

    if (typeof options !== 'function') {
      mailOptions = Object.assign(mailOptions, options);
    } else {
      callback = options;
    }

    nodemailerTransport.sendMail(mailOptions, (err, info) => {
      if (err) {
        winston.error(err);
        return callback(true, err);
      }

      winston.info('Message sent: ' + info.response);
      return callback(null, info.response);
    });
  }
};
