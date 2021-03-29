const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: '../project/static/script.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    output: {
        filename: './bundle.js'
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}