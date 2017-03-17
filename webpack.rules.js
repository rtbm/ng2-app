module.exports = [{
  test: /\.ts$/,
  enforce: 'pre',
  use: [{
    loader: 'tslint-loader',
    options: {
      emitErrors: process.env.NODE_ENV === 'production',
    },
  }],
}, {
  test: /\.ts$/,
  use: [{
    loader: 'awesome-typescript-loader',
  }],
}, {
  test: /\.component.html$/,
  use: [{
    loader: 'raw-loader',
  }],
}, {
  test: /\.component.scss$/,
  use: [{
    loader: 'css-to-string-loader',
  }, {
    loader: 'css-loader',
  }, {
    loader: 'postcss-loader',
  }, {
    loader: 'sass-loader',
  }],
}, {
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      hash: 'sha512',
      digest: 'hex',
      name: '[hash].[ext]',
    }
  }, {
    loader: 'image-webpack-loader',
    options: {
      bypassOnDebug: true,
      gifscale: {
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
    }
  }],
}];
