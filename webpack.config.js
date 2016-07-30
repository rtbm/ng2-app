const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

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

  plugins,

  devServer: {
    historyApiFallback: { index: '/' },
  },

  module: {
    loaders,
    noParse: [/zone\.js\/dist\/.+/, /angular2\/bundles\/.+/],
  },
};
