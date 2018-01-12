'use strict';

var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var shared = require("./webpack.shared.js");

var loaders = [{
	test: /\.ts[x]?$/,
	loaders: [
		"react-hot-loader/webpack",
		"ts-loader"
	]
}, {
	test: /\.scss$/,
	use: ExtractTextPlugin.extract({
		fallback: "style-loader",
		use: [
			{
				loader: "css-loader",
				options: {
					modules: true,
					localIdentName: '[path]-[name]_[local]-[hash:base64:5]',
					discardComments: { removeAll: true }
				}
			},
			"sass-loader"
		]
	})
},
{
	test: /\.(jp[e]?g|png|gif|svg)$/i,
	loader: "file-loader?name=img/[name].[ext]"
}, {
	test: /\.html$/,
	loader: "file-loader?name=[name].[ext]"
}, {
	test: /\.ico$/,
	loader: "file-loader?name=[name].[ext]"
}];

var server = {
	name: "dev.server-side rendering",
	target: "node",
	devtool: 'cheap-module-source-map',
	externals: [
		/^[a-z\-0-9]+$/, {
			"react-dom/server": true
		}
	],
	entry: {
		"server.bundle": shared.APP_DIR + "/server"
	},
	output: {
		filename: "[name].js",
		path: shared.SERVER_BUILD_DIR,
		publicPath: "http://localhost:8081/",
		libraryTarget: "commonjs2"
	},
	module: {
		loaders: loaders
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
		alias: {
		}
	},
	plugins: [
		new ExtractTextPlugin("[name].css"),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			}
		}),
		new webpack.ProvidePlugin({
			"React": "react",
			"ReactDOM": "react-dom"
		}),
	]
};

module.exports = server;