var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        mian: './src/main.js'
    },
    output: {
        path: path.join(__dirname + '/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|gif)$/,
            use: 'url-loader'
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin({})
    ],
    devtool: 'cheap-eval-source-map', //提示报错的具体位置信息
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    devServer: {
        compress: true,
        port: 5500,
        open: true,
        hot: true
    }

}