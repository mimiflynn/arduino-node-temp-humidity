module.exports = {
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
  entry: __dirname + '/client/scripts/app.js',
  devtool: '#source-map',
  output: {
      path: __dirname + '/dist/js/',
      filename: 'app.js'
  },
  module: {
//    preLoaders: [
//      { test: /\.js?/, exclude: __dirname + '/node_modules', loaders: ['eslint'] }
//    ],
    loaders: [
      { test: /\.(js||jsx)$/, loader: 'babel-loader', exclude: __dirname + '/node_modules' }
    ]
  }
}

