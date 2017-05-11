const webpack = require('webpack');
const merge = require('webpack-merge');
const com = require('./common.js');

console.log("Development Mode ver "+com.npmPackage.version);
exports.conf = merge(com.conf, {

  devtool: 'source-map', 

  plugins: [

      /* webpack option */    
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true
      }),

      /* global definition */
      new webpack.DefinePlugin({
           __PROD__: JSON.stringify(false),
           __VERSION__: JSON.stringify(com.npmPackage.version),
      })

    ]  
});

