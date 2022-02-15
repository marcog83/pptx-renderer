var path = require('path'); 
module.exports = {
    entry: {
        index: './packages/renderer/src/index.js'
    },
    mode: 'development',
    output: {
        library: 'PPTX',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    externals: ["pptxgenjs"] ,
     
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve('babel-loader'),

            }
        ]
    },
devtool:false

};