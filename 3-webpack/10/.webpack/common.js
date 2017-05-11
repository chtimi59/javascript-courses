const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

exports.root_path = path.resolve(__dirname, '../');
exports.src_path = exports.root_path +  '/src';
exports.out_path = exports.root_path +  '/build';
exports.npmPackage = require(exports.root_path+'/package.json');
exports.npmModules = exports.root_path +  '/node_modules';

exports.conf = {

    entry: {
        bundle: exports.src_path + '/index.js',
    },

    output: {
        filename: '[name].js',
        path: exports.out_path
    },

    externals: {
        "moment": "moment"
    },
  
    module: {
       rules: [     
            {
               test: /\.css$/,
               use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "raw-loader",
               })
            }
       ]
    },

    resolve: {
      modules: [
         exports.npmModules,
         exports.src_path,
      ]
    },

    plugins: [
       new ExtractTextPlugin('bundle.css')
    ]
}