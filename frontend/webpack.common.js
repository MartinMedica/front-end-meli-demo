const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
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
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src","index.html"),
            filename: "index.html"
        })
    ]
}