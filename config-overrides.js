const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-plugin-px2rem');
const webpack = require('webpack')
module.exports = function override(config, env) {

	config.plugins.push(new webpack.LoaderOptionsPlugin({
		// webpack 2.0之后， 此配置不能直接写在自定义配置项中， 必须写在此处
		react: {
			postcss: [
				autoprefixer({browsers: ['iOS>8', 'Android>4']}),
				pxtorem({
				rootValue: 75,
				unitPrecision: 5,
				propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
				selectorBlackList: [],
				replace: true,
				mediaQuery: false,
				minPixelValue: 0
			})]
		},
	}))
	return config
}
