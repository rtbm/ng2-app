const path = require('path');
const plugins = require('./webpack.plugins');
const loaders = require('./webpack.loaders');

module.exports = config => config.set({
  basePath: '',
  frameworks: [
    'jasmine',
  ],
  exclude: [],
  files: [{
    pattern: './src/app.spec-bundle.ts',
    watched: false,
  }],
  preprocessors: {
    './src/app.spec-bundle.ts': ['webpack'],
  },
  webpack: {
    entry: {
      app: './src/app.spec-bundle.ts',
    },
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.js', '.ts'],
    },
    plugins: plugins.basePlugins,
    module: {
      loaders,
    },
  },
  webpackMiddleware: {
    stats: 'errors-only',
  },
  reporters: [
    'progress',
  ],
  port: 9876,
  colors: true,
  logLevel: config.LOG_INFO,
  autoWatch: false,
  browsers: [
    'PhantomJS',
  ],
  singleRun: true,
});
