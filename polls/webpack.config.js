var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
require('style-loader');
require('css-loader');
require('sass-loader');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    scripts : "./static/js/index.js",
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'static/js')
  },
  module: {
	           loaders: [

            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
        ] 

  }
};

