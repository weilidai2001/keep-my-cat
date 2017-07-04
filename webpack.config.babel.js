const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    cache: true,
    context: process.cwd(),
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 8099
    },
    resolve: {
        modules: [
            path.resolve('./node_modules')
        ],
        extensions: ['.js', '.jsx']
    },
    entry: {
        'main': './src/js/main.jsx'
    },
    output: {
        path: path.join(process.cwd(), 'build'),
        filename: '[name].js',
        sourceMapFilename: '[file].map'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs'
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        },{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        },{
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            use: 'babel-loader'
        },{
            test: /\.(png|jpe?g)$/,
            use: ['file-loader']
        }]
    }
};