const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const env = process.env.NODE_ENV
if(env === 'production') {
	console.log(process.env.NODE_ENV)
	process.env.publicUrl = '/'
}
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, './build'),
		filename: 'js/[name].[hash:8].js'
  },
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(png|jpg|gif|ttf|eot|woff(2)?)(\?[=a-z0-9]+)?$/,
				use: [{
					loader: 'url-loader',
					options: {
						query: {
							limit: '8192',
							name: 'images/[name]_[hash:7].[ext]',
						}
					}
				}]
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(
			[path.join(__dirname, './build/*.*')],
			{
				// root目录
				root: path.join(__dirname, './')
			}
		),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			hash: true,
			minify: {
				removeAttributeQuotes: true
			}
		}),
		new ExtractTextPlugin('css/[name].[hash:8].css')
	]
}