const path = require('path');

module.exports = {
    mode: 'development',  // Change to 'production' for production builds
    entry: './src/index.js',  // Entry point for your application
    output: {
        filename: 'main.js',  // Output file name
        path: path.resolve(__dirname, 'dist'),  // Output path
        clean: true,  // Clean the output directory before emit
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,  // Transpile .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,  // Process CSS files
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],  // Resolve these extensions
    },
    devtool: 'inline-source-map',  // Source maps for easier debugging
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,  // Port number
    },
};
