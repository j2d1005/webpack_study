var path = require('path');

module.exports = {
	mode: 'none',
	entry: './js/app.js',
	output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'main.bundle.js'
	},
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	stats: {
			colors: true
	},
	devtool: 'source-map'
	// 크롬 개발자도구의 소스탭에서 콘솔이나 등등 클릭했을 때 번들링된 js파일이 아닌 원본 파일을 바로 보여주는 기능
};
