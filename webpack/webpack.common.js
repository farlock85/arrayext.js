const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.ts$/,
                exclude: [path.resolve(__dirname, 'test')],
                enforce: 'post',
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: { esModules: true }
                }
            }
        ]
    }
};
