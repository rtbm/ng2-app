'use strict';
const nodemailer = require('nodemailer');
const winston = require('winston');

const transportOptions = {
  host: process.env.MAILER_SMTP_HOST,
  port: process.env.MAILER_SMTP_PORT,
  secure: process.env.MAILER_SMTP_SECURE,
  auth: {
    user: process.env.MAILER_SMTP_USER,
    pass: process.env.MAILER_SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: process.env.MAILER_SMTP_TLS_REJECT_UNAUTHORIZED,
  },
};

const nodemailerTransport = nodemailer.createTransport(transportOptions);

module.exports = {
  send: (to, subject, html, options, callback) => {
    let mailOptions = {
      from: process.env.MAILER_FROM,
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
