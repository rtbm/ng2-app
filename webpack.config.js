const webpack = require('webpack');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
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
  new SplitByPathPlugin([
    { name: 'vendor', path: [__dirname + '/node_modules/'] }
  ]),
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
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      screwIE8: true,
      keep_fnames: true,
    },
    compress: {
      warnings: false,
    },
  }),
];

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
    ? [...basePlugins, ...prodPlugins]
    : basePlugins,

  devServer: {
    historyApiFallback: {
      index: '/',
    },
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts',
      exclude: /node_modules/,
    }, {
      test: /\.component.html$/,
      loader: 'raw',
      exclude: /node_modules/,
    }, {
      test: /\.component.scss$/,
      loaders: [
        'css-to-string',
        'css',
        'postcss',
        'sass',
      ],
      exclude: /node_modules/,
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ]
    }],

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
