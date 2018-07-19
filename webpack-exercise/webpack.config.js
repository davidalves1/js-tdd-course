const webpack = require('webpack');
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  mode: nodeENV,
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify(nodeENV) }
    })
  ]
}
