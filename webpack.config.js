import { resolve } from 'path';

export default {
    entry: './src/scripts/main.js',
    output: {
        filename: 'bundle.js',
        path: resolve('./dist'),
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
    mode: 'development',
    devtool: 'inline-source-map',
};