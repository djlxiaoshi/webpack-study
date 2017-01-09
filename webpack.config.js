/**
 * Created by ASUS on 2017/1/8.
 */
var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry : {
        'admin': './admin/admin.js',
        'custom':'./custom/custom.js'
    },
    plugins:[
      /*  new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),*/
        new OpenBrowserPlugin({ url: 'http://127.0.0.1:8080' })
    ],
    output:{
        filename:"[name].bundle.js",
        path:path.join(__dirname,'dist'),
        publicPath:'/dist/'
    },
    module: {
        loaders: [{
            test:/\.css$/,
            loaders:['style','css']
        },{
            test:/\.scss$/,
            loaders:['style','css','sass']
        },{
            test:/\\img\\/,
            loaders:['file']
        },{
            test:/\\icon\\/,
            loaders:['url']
        },{
            test:/\.js$/,
            exclude:/node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    }
};
