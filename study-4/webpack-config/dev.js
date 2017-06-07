const webpackMerge = require('webpack-merge');
const base = require('./base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(base,{
	output: {
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			
			{
		        test: /\.scss$/,
		        exclude: [/node_modules/],
		        use: [
		          'style-loader',
		          {
		            loader: 'css-loader',
		            options: {
		              sourceMap: true
		            }
		          },
		          'postcss-loader',
		          {
		            loader: 'sass-loader',
		            options: {
		              sourceMap: true
		            }
		          }
		        ]
		    },
		    
		]
	},
	
	devServer: {
		contentBase: process.cwd(),
		compress: true,
		historyApiFallback: true,
		hot: true,
		inline: true,
		port: 8888
	},
	devtool: 'eval-source-map'
})