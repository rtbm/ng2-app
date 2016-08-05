'use strict';
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const winston = require('winston');

module.exports = {
  send: (email, subject, body, callback) => {
    const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [{
          to: [{ email }],
          subject,
        }],
        from: {
          email: process.env.APP_EMAIL,
        },
        content: [{
          type: 'text/html',
          value: body,
        }],
      },
    });

    sg.API(request, err => {
      if (err) {
        winston.error(`Mailer error occured! ${JSON.toString(err)}`);

        if (callback) {
          err = new Error('Service Unavailable');
          err.status = 503;
          return callback(err);
        }

        return false;
      }

      if (callback) {
        return callback();
      }

      return true;
    });
  },
};
