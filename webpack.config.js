const path = require('path');

module.exports = {
    mode:'development',
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test:/\.js$/,
            exclude:/node_module/
        },{
            test:/\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool : 'eval-source-map',
    devServer:{
        
        static:path.join(__dirname, 'public') 
        
    }
};