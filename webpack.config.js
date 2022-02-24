var path = require('path');
module.exports = {
    entry: {
        index: './index.js'
    },
    mode: 'development',
    output: {
        library: 'PPTX',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    externals: ["pptxgenjs"],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve('babel-loader'),

            }
        ]
    },
    watchOptions: {
        aggregateTimeout: 200,
        ignored: [ '**/test', '**/node_modules' ]
      }

};