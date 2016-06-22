'use strict';
const config = require('./config');
const express = require('express');
const winston = require('winston');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const logger = require('./utils/logger');
const cors = require('cors');
const jwt = require('express-jwt');

const distPath = path.join(__dirname, '../public');

const app = express();

mongoose.connect(config.database);

/*app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", 'localhost:8080'],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'"],
      imgSrc: ["'self'", 'data:'],
      sandbox: ['allow-forms', 'allow-scripts'],
      reportUri: '/report-violation',
      objectSrc: [],
    },
    reportOnly: false,
    setAllHeaders: false,
    disableAndroid: false,
    browserSniff: false,
  }
}));*/

app.use(cors());

app.use(
  jwt({ secret: config.secretSalt }).unless({
    path: [
      '/api/auth/signin',
      '/api/auth/signup',
      '/api/auth/reset-password',
      '/api/auth/change-password',
    ]
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(distPath));

app.use('/api/quotes', require('./routes/quotes'));
app.use('/api/auth', require('./routes/auth'));
app.use('*', (req, res) => res.sendFile(path.join(distPath, 'index.html')));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(require('morgan')('dev', { stream: logger.stream }));

  app.use((err, req, res, next) => {
    winston.log('error', err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send();
});


module.exports = app;
