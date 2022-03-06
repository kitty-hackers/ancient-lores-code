import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

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

const config = {
	devServer: {
		hot: "only",
		port: 3000,
	},
	devtool: "eval-source-map",
	entry: "./src/index.tsx",
	mode: process.env.mode ?? "development",
	module: {
		rules: [{ ...babelLoader }, { ...lessLoader }],
	},
	output: {
		clean: true,
		filename: "bundle.js",
	},
	plugins: [
		new HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: "public/index.html",
		}),
	],
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
};

export default config;
