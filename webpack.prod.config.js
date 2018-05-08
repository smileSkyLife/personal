const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
module.exports = {
	entry: {
		app: path.resolve(__dirname, './src/index.js'),
		// 将 第三方依赖 单独打包
		vendor: ['react', 'react-router-dom']
	},
	output: {
		path: path.join(__dirname, './build'),
		filename: 'js/[name].[hash:8].js',
		publicPath: "./"
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(png|gif|jpg|jpeg|bmp)$/i,
				use: {
					loader: 'url-loader',
					options: {
						limit: '8192',
						outputPath: 'images/',
						publicPath : '/images',
						name: '[name].[hash:8].[ext]'
					}
				}
			}, {
				test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i,
				use: {
					loader: 'url-loader',
					options: {
						limit: '8192',
						outputPath: 'font/'
					}
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				}),
				exclude: /node_modules/
			},
			{
				test : /\.json$/,
				use: {
					loader : 'json-loader',
					options: {
						outputPath: '/',
						name: '[name].[json]'
					}
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin('build/**', {
			root: __dirname
		}),
		new InterpolateHtmlPlugin({
			NODE_ENV:'production',
			PUBLIC_URL:''
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			inject: true
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				//supresses warnings, usually from module minification
				warnings: false
			}
		}),
		new ExtractTextPlugin('css/[name].[hash:8].css'),

		new webpack.optimize.CommonsChunkPlugin(
			 {name: 'vendor', filename: 'js/[name].[hash:8].js'}
		)
		// new OptimizeCssAssetsPlugin({
		// 	assetNameRegExp: /\.css$/g,
		// 	cssProcessor: require('cssnano'),
		// 	cssProcessorOptions: { discardComments: {removeAll: true } },
		// 	canPrint: true
		// })
	]
}