const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChuckPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");
const bootstrapEntryPoints = require('./webpack.bootstrap.config');

const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

const isProd = process.env.NODE_ENV === 'production'; //true or false
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    loader: ['css-loader', 'sass-loader'],
    publicPath: '/dist'
})

const cssConfig = isProd ? cssProd : cssDev;

const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;


module.exports = {
    entry: {
        about: "./src/components/about",
        contact: "./src/components/contact",
        app: "./src/components/app",
        vendor: ["react", "react-dom"],
        bootstrap: bootstrapConfig
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: "js/[name].bundle.js",
        // publicPath: "/dist",
    },

    module: {
        rules: [{
                test:['/\.js$/'],
                 exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                         presets:[ 'es2015','react']
                    }
                }]
            },
           {
                test:['/\.jsx?$/'],
                 exclude: (/node_modules/),
                use: [{
                    loader: 'babel',
                    options: {
                        presets:[ 'es2015','react']
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: cssConfig

            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                    }
                }]
            },
            {
                test: /\.(woff2?|svg)$/,
                loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
                loader: 'imports-loader?jQuery=jquery'
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8000
    },
    plugins: [

        new HtmlWebpackPlugin({
            title: 'Webpack Demo',
            hash: true,
            excludeChunks: ['contact', 'about'],
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'About Page',
            hash: true,
            excludeChunks: ['contact', 'app'],
            filename: 'about.html',
            template: './src/about.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Contact Page',
            hash: true,
            excludeChunks: ['app', 'about'],
            filename: 'contact.html',
            template: './src/contact.html'
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            disable: !isProd,
            allChunks: true,
        }),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute! 
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        new CommonsChuckPlugin({
            name: "vendor",
            filename: "js/[name].bundle.js",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
}