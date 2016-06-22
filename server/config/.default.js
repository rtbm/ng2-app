module.exports = {
  secretSalt: '',
  baseUrl: 'http://localhost:8080/',
  database: 'mongodb://localhost:27017/ng2app-default',
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
        rejectUnauthorized: false,
      },
    },
  },
};
