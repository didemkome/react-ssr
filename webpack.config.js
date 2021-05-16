const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: {
		index: "./src/index.js",
		shared: "lodash",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	optimization: {
		splitChunks: {
			chunks: "all",
		},
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
