const path = require('path');

const rules = require('./webpack.rules');
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
    extensions: ['.js', '.ts'],
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
    rules,
  },
};
