const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    filename: './src/app.js'
  },
  output: {
    path: __dirname,
    filename: './build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
