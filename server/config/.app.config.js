module.exports = {
  secret: 'secretpass',
  mailer: {
    from: 'no-reply@localhost',
    smtpConfig: {
      host: 'localhost',
      port: 465,
      secure: true,
      auth: {
        user: 'no-reply',
        pass: '',
      },
      tls: {
        rejectUnauthorized: true,
      },
    },
  },
};
