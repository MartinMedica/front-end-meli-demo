const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common,{
    output:  {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath : '/'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss?/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
})