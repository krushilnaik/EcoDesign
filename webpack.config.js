const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'public/js/shop.jsx'),
	output: {
		filename: 'shop.[contentHash].js',
		path: path.resolve(__dirname, 'public', 'dist', 'js')
	},
	module: {
		rules: [
			{
				test: /\.m?(?:js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
}
