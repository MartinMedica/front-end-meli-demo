const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common,{
    output:  {
        path: path.join(__dirname, "dist"),
        filename: "bundle.[contenthash].js"
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
        new  MiniCssExtractPlugin(
            {
                filename: "[name].[contenthash].css",
                chunkFilename: "[id].[contenthash].css" 
            }
        )
    ]
})