var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
require('style-loader');
require('css-loader');
const path = require('path');

plugins: [
   new webpack.ProvidePlugin({
		 $: "jquery",
	       jQuery: "jquery",
	       "window.jQuery": "jquery"
	     })
  ]

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./static/js/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static/js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

