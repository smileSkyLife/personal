const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
process.env.PUBLIC_URL = '/public'
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
				test: /\.html$/,
				loader: "html-loader"
			},
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
				use : [{loader : "style-loader"},{loader : "css-loader"}],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new InterpolateHtmlPlugin({
			NODE_ENV:'dev',
			PUBLIC_URL:'public'
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			inject: true
		}),
		// 热加载插件
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			__DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
		}),
	],
	//我们在这里对webpack-dev-server进行配置
	devServer: {
		contentBase:"./",// 本地服务器在哪个目录搭建页面，一般我们在当前目录即可；
		historyApiFallback:true,//当我们搭建spa应用时非常有用，它使用的是HTML5 History Api，任意的跳转或404响应可以指向 index.html 页面；
		inline:true,//用来支持dev-server自动刷新的配置，webpack有两种模式支持自动刷新，一种是iframe模式，一种是inline模式；使用iframe模式是不需要在devServer进行配置的，只需使用特定的URL格式访问即可；不过我们一般还是常用inline模式，在devServer中对inline设置为true后，当我们启动webpack-dev-server时仍要需要配置inline才能生效
		hot:true,// 启动webpack热模块替换特性,这里是个坑
		port:8080,//配置服务端口号
		host:'192.168.40.65',//服务器的IP地址，可以使用IP也可以使用localhost
		compress:true,//服务端压缩是否开启
	}
}