const path = require('path');

const config = {
    entry: {
      inputname: './src/index2.js'
    },
    output: {
        filename: 'outpuname.js',
        path: path.resolve(__dirname, 'dist2')
    },
    module: {
        rules: [
            {
                test: /\.jpg$/,
                use: 'file-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    },
                ],
            },
        ]
    },
}

module.exports = config;