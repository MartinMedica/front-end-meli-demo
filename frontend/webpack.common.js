const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry:  path.join(__dirname, "src", "js", "app.tsx"),
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src","index.html"),
            filename: "index.html"
        }),
        new CopyPlugin({
            patterns: [
              { from: path.join(__dirname, "src", "images"), to: path.join(__dirname, "dist", "images")}
            ]
        })
    ]
}