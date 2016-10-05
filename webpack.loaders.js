module.exports = [{
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
}];
