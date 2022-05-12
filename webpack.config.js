const path = require('path');

module.exports = {
  entry: {
    index: './index.js'
  },
  output: {
    library: 'PPTX',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  externals: [ 'pptxgenjs', 'react' ],
  resolve: {
    extensions: [ '*', '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')

      }
    ]
  },
  watchOptions: {
    aggregateTimeout: 200,
    ignored: [ '**/test', '**/node_modules' ]
  }

};
