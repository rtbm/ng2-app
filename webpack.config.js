'use strict';
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

const __PRODUCTION__ = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: './src/boot.ts',
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[hash].js',
    publicPath: '/',
    chunkFilename: '[id].chunk.js',
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.ts'],
  },

  plugins: __PRODUCTION__
    ? [...plugins.basePlugins, ...plugins.prodPlugins]
    : plugins.basePlugins,

  devServer: {
    historyApiFallback: {
      index: '/',
    },
  },

  module: {
    loaders,

    postcss: [
      precss,
      autoprefixer,
    ],

    preLoaders: [{
      test: /\.ts$/,
      loader: 'tslint',
    }],

    tslint: {
      emitErrors: process.env.NODE_ENV === 'production',
    }
  },
};
