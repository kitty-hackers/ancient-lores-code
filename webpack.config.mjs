/* eslint-disable no-underscore-dangle */

import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { HotModuleReplacementPlugin } = webpack;

const babelLoader = {
	exclude: /node_modules/,
	loader: "babel-loader",
	test: /\.[jt]sx?$/i,
};

const lessLoader = {
	test: /\.less?$/i,
	use: ["style-loader", "css-loader", "less-loader"],
};

const assetLoader = [
	{
		test: /\.(jpe?g|png)/i,
		type: "asset/resource",
	},
];

const config = {
	devServer: {
		hot: "only",
		port: 3000,
	},

	devtool: "eval-source-map",
	entry: path.resolve(__dirname, "src", "index.tsx"),
	mode: process.env.mode ?? "development",

	module: {
		rules: [{ ...babelLoader }, { ...lessLoader }, ...assetLoader],
	},

	output: {
		clean: true,
		filename: "bundle.js",
	},

	plugins: [
		new HotModuleReplacementPlugin(),

		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src", "assets"),
					globOptions: {
						ignore: ["**/logos/**"],
					},
				},
			],
		}),

		new HtmlWebpackPlugin({
			meta: {
				description:
					"Сайт Ancient Lores | Сказания древности - ресурс о настольных ролевых играх: D&D, Pathfinder, GURPS",
				"msapplication-TileColor": "#ffffff",
				"msapplication-TileImage": "/favicon/ms-icon-144x144.png",
				"theme-color": "#ffffff",
				viewport: "width=device-width, initial-scale=1",
			},
			template: "public/index.html",
			title: "Ancient Lores | Сказания древности",
		}),
	],

	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
};

export default config;
