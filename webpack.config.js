const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: "source-map",
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index_bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react"],
					},
				},
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
					},
					{ loader: "sass-loader" },
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			hash: true,
			filename: "index.html", // target html
			template: "./src/index.html", // source html
		}),
	],
};
