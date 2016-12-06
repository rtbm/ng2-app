'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const logger = require('./utils/logger');
const auth = require('./middlewares/auth');

const distPath = path.join(__dirname, '../public');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

if (app.get('env') === 'development') {
  app.use(require('morgan')('dev', { stream: logger.stream }));
  app.use(require('cors')());
}

app.use(require('compression')());

app.use(express.static(distPath, {
  cacheControl: true,
  maxAge: 86400000,
  index: 'index.html',
}));

app.use(bodyParser.json({ limit: '512kb' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/quotes', auth.check, require('./routes/quotes'));
app.use('/api/users', auth.check, require('./routes/users'));

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
  app.use((err, req, res) => {
    logger.error('error', err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.send();
});

module.exports = app;
