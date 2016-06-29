'use strict';
const mailerConfig = require('../config').mailer;
const nodemailerTransport = require('nodemailer').createTransport(mailerConfig.smtpConfig);
const winston = require('winston');

module.exports = {
  send: (to, subject, html, options, callback) => {
    let mailOptions = {
      from: mailerConfig.from,
      to,
      subject,
      html,
    };

    if (typeof options === 'object') {
      mailOptions = Object.assign(mailOptions, options);
    } else if (typeof options === 'function') {
      callback = options;
    } else {
      callback = function() {}
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
