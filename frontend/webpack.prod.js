const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common,{
    output:  {
        path: path.join(__dirname, "dist"),
        filename: "/bundle.[contenthash].js",
        publicPath : '/'
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.scss?/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new  MiniCssExtractPlugin(
            {
                filename: "[name].[contenthash].css",
                chunkFilename: "[id].[contenthash].css" 
            }
        ),
        new CopyPlugin({
            patterns: [
              { from: path.join(__dirname, "src", "images"), to: path.join(__dirname, "dist", "images")}
            ]
        })
    ]
})