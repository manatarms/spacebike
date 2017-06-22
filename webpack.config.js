const path = require("path");
const webpack = require("webpack");

module.exports = {
	context: path.resolve(__dirname, "./src"),
	entry: {
		app: "./index.js"
	},
	output: {
		path: path.resolve(__dirname, "./dist/assets"),
		filename: "[name].bundle.js",
		publicPath: "/assets"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"]
					}
				}
			}
		]
	},
	devtool: "source-map",
	devServer: {
		contentBase: path.resolve(__dirname, "./src"),
		open: true
	},
	//Todo cache common.js on the client side
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			filename: "commons.js",
			minChunks: 2
		})
	]
};
