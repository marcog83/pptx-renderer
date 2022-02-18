var path = require('path');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index:'./src/index.js'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: [ '.js', '.jsx'],
        alias: {
            "pptxgenjs": require.resolve("pptxgenjs"),
            // "react": require.resolve("react"),
            'react/jsx-runtime': require.resolve("react/jsx-runtime")
        }
    }, 
    
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve('babel-loader'),
                exclude:/node_modules/,
                options: {
                    rootMode: 'upward',
                    cacheDirectory: true,
                    cacheCompression: false
                }
            },
            {
                test: /\.css$/i,
                use: [require.resolve("style-loader"), require.resolve("css-loader")],
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: resolve(__dirname, './src/index.html'),
            inject: 'body',
            chunks: ['runtime', 'index'],
            chunksSortMode: 'manual',
            hash: '[name][contenthash]'
        })
    ],
    devServer: {
        historyApiFallback: true,
        port: 3000
    }

};