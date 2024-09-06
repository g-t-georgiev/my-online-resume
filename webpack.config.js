import { resolve } from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: './src/scripts/main.js',
    output: {
        filename: 'bundle.js',
        path: resolve('./dist'),
        publicPath: '/',
    },
    devServer: {
        contentBase: resolve('./src'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html',
        }),
    ],
    mode: 'development',
    devtool: 'inline-source-map',
};