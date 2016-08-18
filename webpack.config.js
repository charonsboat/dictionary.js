module.exports = {
    entry: './src/dictionary.js',
    output: {
        path: './dist',
        filename: 'dictionary.js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                query: {
                  presets: 'es2015',
                }
            }
        ]
    }
};
