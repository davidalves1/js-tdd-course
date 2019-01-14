const nodeENV = process.env.NODE_ENV || 'production';
const { join } = require('path')

module.exports = {
  mode: nodeENV,
  devtool: 'source-map', // Tipos: cheap-eval-source-map (mais leve, porém meno completo), eval-source-map (meio termo), source-map (mais pesado, porém mais completo)
  entry: {
    filename: './src/index'
  },
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'githubWrapper'
  },
  // devServer: {
  //   contentBase: `${__dirname}/public`,
  //   compress: true,
  //   port: 8001,
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: join(__dirname, 'src'),
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
}
