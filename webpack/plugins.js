const webpack = require('webpack');
const SplitByPathPlugin = require('webpack-split-by-path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    __BASE_URL__: JSON.stringify(process.env.BASE_URL),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new SplitByPathPlugin([
    { name: 'vendor', path: [__dirname + '/node_modules/'] }
  ]),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
  }),
  new webpack.NoErrorsPlugin(),
];

const prodPlugins = [
  new webpack.optimize.DedupePlugin(),
  /*new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false,
    },
  }),*/
];

const devPlugins = [];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);
