var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChuckPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");

var isProd = process.env.NODE_ENV === 'production'; //true or false
var cssDev = ['style-loader' ,'css-loader' ,'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
    fallback:'style-loader',
    loader:['css-loader','sass-loader'],
    publicPath:'/dist'
})

var cssConfig = isProd ? cssProd : cssDev;



module.exports = {
    entry: {
        about: "./src/components/about",
        contact: "./src/components/contact",
        app: "./src/components/app",
        vendor: ["react", "react-dom"]
    },
    output: {
        path:path.resolve(__dirname +'/dist'),
        filename: "js/[name].bundle.js" ,
        // publicPath: "/dist",
    },
   
    module:{
        rules:[
            {
                test:/\.js$'/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:'es2015'
                        }
                    }
                ]
            },
            {
                test:/\.scss$/,
               use:cssConfig

            },
            {
                test:/\.html$/,
                use:[
                    'html-loader'
                ]
            },
              {
                test:/\.(png|jpg|jpeg|gif|svg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'[name].[ext]',
                            outputPath:'img/',
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        contentBase:path.join(__dirname,"dist"),
        compress:true,
        port:8000
    },
    plugins: [
      new HtmlWebpackPlugin({
          title:'Webpack Demo',
          hash:true,
          excludeChunks:['contact', 'about'],
          filename:'index.html',
          template:'./src/index.html'
      }),
      new HtmlWebpackPlugin({
         title:'About Page',
          hash:true,
           excludeChunks:['contact', 'app'],
          filename:'about.html',
          template:'./src/about.html'
      }),
       new HtmlWebpackPlugin({
         title:'Contact Page',
          hash:true,
           excludeChunks:['app', 'about'],
           filename:'contact.html',
          template:'./src/contact.html'
      }),
      new ExtractTextPlugin({
           filename:'css/main.css',
           disable:!isProd,
           allChunks:true,
            publicPath:'dist/'
      }),
        new CommonsChuckPlugin({
            name: "vendor",
            filename: "js/[name].bundle.js" ,
        }),
    ]
}