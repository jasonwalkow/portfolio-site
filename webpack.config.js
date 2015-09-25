var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + "/public/",
        //publicPath: "public/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css") },
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style", "css!less" ) },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" },
            { test: /\.jpe?g$|\.gif$|\.png|\.ico$/, loader: 'url?limit=10000&name=[name].[ext]' },
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};