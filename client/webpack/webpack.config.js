const path = require('path');

module.exports = {
    mode:"production",
    entry: './client/src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i, //grabs css files
                use: ["style-loader", "css-loader"], //loads stylesheets as modules
            },
            {
                test: /\.(png|jp(e*)g|svg)$/, //grabs image files
                use: [{
                    loader: 'url-loader', //converts files to base64 URIs for better loading
                    options: { 
                        limit: 8000, // limits conversion to files < 8kb
                        name: 'images/[hash]-[name].[ext]' //puts files in folder named /images
                    }
                }],
            },
        ],
    },
};