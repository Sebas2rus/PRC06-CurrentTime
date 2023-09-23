const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        },
        compress: true,
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                // This allow to use styles like sass
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    // plugins: [
    //     // To strip all locales except “en”
    //     new MomentLocalesPlugin(),

    //     // Or: To strip all locales except “en”, “es-us” and “ru”
    //     // (“en” is built into Moment and can’t be removed)
    //     new MomentLocalesPlugin({
    //         localesToKeep: ['es-us', 'es'],
    //     }),
    // ],
}