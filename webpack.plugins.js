const webpack = require('webpack');
const SplitByPathPlugin = require('webpack-split-by-path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sassLintPlugin = require('sasslint-webpack-plugin');

const __DEV__ = process.env.NODE_ENV !== 'production';
const __PRODUCTION__ = process.env.NODE_ENV === 'production';

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__,
    __PRODUCTION__,
    __BASE_URL__: JSON.stringify(process.env.BASE_URL),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
    minify: __DEV__ ? undefined : {
      html5: true,
      collapseWhitespace: true,
      removeTagWhitespace: true,
    },
  }),
  new sassLintPlugin({
    glob: './src/**/*.s?(a|c)ss',
    failOnWarning: __PRODUCTION__,
    failOnError: __PRODUCTION__,
  }),
];

const prodPlugins = [
  new SplitByPathPlugin([{
    name: 'vendor',
    path: [
      `${__dirname}/node_modules/`,
    ]
  }]),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      screwIE8: true,
    },
    compress: {
      warnings: false,
    },
  }),
];

module.exports = { basePlugins, prodPlugins };
