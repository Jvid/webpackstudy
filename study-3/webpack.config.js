const HtmlwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH,'src/js');
const BUILD_PATH = path.resolve(ROOT_PATH,'dist');

const TEM_PATH = path.resolve(ROOT_PATH,'templates');

const config = {
	entry: {
		pageA: path.resolve(APP_PATH,'pageA.js'),
		pageB: path.resolve(APP_PATH,'pageB.js'),
		vendors: ['jquery','moment']
	},
	output: {
		path: BUILD_PATH,
		filename: '[name].[hash].js'
	},
	plugins: [
		new HtmlwebpackPlugin({
			titile: 'pageA',
			template: path.resolve(TEM_PATH,'pageA.html'),
			filename: 'pageA.html',
			//chunks这个参数告诉插件要引用entry里的哪几个入口
			chunks: ['pageA'],
			inject: 'body'
		}),
		new HtmlwebpackPlugin({
			title: 'pageB',
			template: path.resolve(TEM_PATH,'pageB.html'),
			filename: 'pageB.html',
			chunks: ['pageB'],
			inject: 'body'
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
				include: [
					path.resolve(ROOT_PATH,'src/css/pageA'),
					path.resolve(ROOT_PATH,'src/css/pageB')
				]
			}
		]
	},
	devServer: {
		contentBase: ROOT_PATH,
		compress: true,
		historyApiFallback: true,
		hot: true,
		inline: true,
		port: 8888
	}
}
module.exports = config;