const path = require('path');
const webpack = require('webpack');

const config = {
	entry: './src/index.tsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/i,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.less?$/i,
				use: [ 'style-loader', 'css-loader', 'less-loader' ],
			},
		],
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
	},
	output: {
		filename: 'bundle.js',
	},
	devServer: {
		port: 3000,
		hot: 'only',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	devtool: 'eval-source-map',
};

module.exports = config;