const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.svelte$/,
                include: path.resolve(__dirname, './src'),
                use: [
                    {
                        loader: 'svelte-loader'
                    }
                ]
            }
        ]
    }
}