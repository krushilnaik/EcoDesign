const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	devtool: false,
	entry: {
		index: path.resolve(__dirname, 'public/js/index.js'),
		shop: path.resolve(__dirname, 'public/js/shop.jsx')
	},
	output: {
		filename: '[name].js',
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
						presets: ['@babel/preset-react', '@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(?:png|svg|jpg|jpeg|gif)/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'images'
					}
				}
			}
		]
	},
	plugins: [
		// new HtmlWebpackPlugin(),
		new CleanWebpackPlugin()
	]
}
