var path = require("path");

module.exports = {
    entry: "./js/app.jsx",
    output: { filename: "app.js", path: path.resolve(__dirname, "js") },
    mode: "development", watch: true,
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                }
            }
        },
        // {
        //     test: /\.(s*)css$/,
        //     use: ExtractTextPlugin.extract({
        //         fallback: 'style-loader',
        //         use: ['css-loader', 'sass-loader']
        //     })
        // },
        {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: '[path][name].[ext]'
                }
            }]
        }]
    }
}


