const webpack = require('webpack');
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  mode: nodeENV,
  devtool: 'source-map', // Tipos: cheap-eval-source-map (mais leve, porém meno completo), eval-source-map (meio termo), source-map (mais pesado, porém mais completo)
  entry: {
    filename: './src/app.js'
  },
  output: {
    path: `${__dirname}/public`,
    filename: './build.js'
  },
  devServer: {
    contentBase: `${__dirname}/public`,
    compress: true,
    port: 8001,
  },  module: {
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
