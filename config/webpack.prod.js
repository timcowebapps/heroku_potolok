'use strict';

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var shared = require("./webpack.shared.js");
var webpackNodeExternals = require('webpack-node-externals');
var CompressionPlugin = require('compression-webpack-plugin');
var path = require("path");

var loaders = [
	{
		test: /\.ts[x]?$/,
		loader: "ts-loader",
		options: {
			configFile: 'tsconfig.json'
		},
		exclude: ["../node_modules/**/*.tsx", "../node_modules/**/*.ts", "../node_modules"]	
	}, {
		test: /\.scss$/,
		use: ExtractTextPlugin.extract({
			fallback: "style-loader",
			use: [
				{
					loader: "css-loader",
					options: {
						modules: true,
						localIdentName: '[name]-[hash:base64:5]',
						discardComments: { removeAll: true },
						minimize: true
					}
				},
				"sass-loader"
			]
		})
	}, {
		test: /\.(jp[e]?g|png|gif|svg)$/i,
		loader: "file-loader?name=img/[name].[ext]"
	}, {
		test: /\.html$/,
		loader: "file-loader?name=[name].[ext]"
	}, {
		test: /\.ico$/,
		loader: "file-loader?name=[name].[ext]"
	}];

var client = {
	name: "prod.client",
	target: "web",
	entry: {
		"client.bundle": shared.APP_DIR + "/client"
	},
	output: {
		filename: "[name].js",
		path: shared.CLIENT_BUILD_DIR,
		publicPath: "/"
	},
	module: {
		loaders: loaders
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
		alias: {
		},
		modules: [
			'node_modules',
			path.resolve(__dirname, '..', 'node_modules')
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.ProvidePlugin({
			"React": "react",
			"ReactDOM": "react-dom"
		}),
		new ExtractTextPlugin({ filename: '[name].css' }),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	]
};

var server = {
	name: "prod.server",
	target: "node",
	externals: [webpackNodeExternals()],
	entry: {
		"server.bundle": shared.APP_DIR + "/server"
	},
	output: {
		filename: "[name].js",
		path: shared.SERVER_BUILD_DIR,
		publicPath: "/",
		libraryTarget: "commonjs2"
	},
	module: {
		loaders: loaders
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
		alias: {
		},
		modules: [
			'node_modules',
			path.resolve(__dirname, '..', 'node_modules')
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.ProvidePlugin({
			"React": "react",
			"ReactDOM": "react-dom"
		}),
		new ExtractTextPlugin({ filename: '[name].css' }),
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	]
};

module.exports = [client, server];