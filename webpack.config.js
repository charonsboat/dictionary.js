module.exports = {
    entry: './src/dictionary.js',
    output: {
        path: './dist',
        filename: 'dictionary.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                query: {
                  presets: 'es2015',
                  plugins: [
                      'add-module-exports'
                  ]
                }
            }
        ]
    }
};
