const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
    const config = {
        mode: env,
        entry: {
            "main": "./src/index.tsx"
        },
        output: {
            filename: "[name].js",
            path: path.join(__dirname, "/docs")
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        module: {
            rules: [
                { test: /\.(ts|tsx)$/, include: /src/, use: "awesome-typescript-loader" },
                { test: /\.(js|jsx)$/, include: /src/, use: require.resolve("babel-loader") },
                { test: /\.(scss|css)$/, use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ] },
                { test: /\.(woff(2)?|ttf|eot|png|svg)(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader" }
            ]
        },
        devServer: {
            contentBase: "./docs",
            historyApiFallback: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "index.html",
                favicon: "favicon.png"
            }),
            new CopyPlugin([
                { from: "./src/static", to: "" }
            ])
        ]
    }

    return config;
}