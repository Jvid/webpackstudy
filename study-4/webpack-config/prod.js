const webpackMerge = require('webpack-merge');
const base = require('./base');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//压缩代码
const CleanWebpackPlugin = require('clean-webpack-plugin');//清空output目录
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(base,{
	output: {
	    filename: 'bundle.[chunkhash].js',
	    path: process.cwd() + '/dist'
	  },
	  module: {
	  rules: [
	    {
	      test: /\.scss$/,
	      exclude: [/node_modules/],
	      use: ExtractTextPlugin.extract({
	        fallback: 'style-loader',
	        use: [
	          {
	            loader: 'css-loader',
	            options: {
	              minimize: true
	            }
	          },
	          'postcss-loader',
	          'sass-loader'
	        ]
	      })
	    }
	  ]
	},
	plugins: [
	  new ExtractTextPlugin({
	    filename: "bundle.[chunkhash].css"
	  }),
	  new UglifyJSPlugin({
	      compress: {
	        warnings: false,
	      },
	      output: {
	        comments: false
	      }
	   }),
	  new CleanWebpackPlugin(['dist'], {
	      root: process.cwd(),
	      exclude: []
	   })
	],
})