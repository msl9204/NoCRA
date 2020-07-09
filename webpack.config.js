const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/index",

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },

    resolve: {
        extensions: ["*", ".js", ".jsx", ".css"],
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            // index.html에 output에서 만들어진 bundle.js를 적용하여, dist에 새로운 html 파일 생성
            template: `./public/index.html`,
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, "./build"), // 이 경로에 있는 파일이 변경될 때 번들을 다시 컴파일
        index: "index.html",
        compress: true,
        port: 3000, // 각자의 portNumber 작성
    },
};
