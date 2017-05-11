const webpack = require('webpack');
const merge = require('webpack-merge');
const com = require('./common.js');

console.log("Production Mode ver "+com.npmPackage.version);
exports.conf = merge(com.conf, {

    plugins: [

      /* force Loader option */
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),

     /* global definition */
      new webpack.DefinePlugin({
           __PROD__: JSON.stringify(false),
           __VERSION__: JSON.stringify(com.npmPackage.version),
      }),

      /* uglify the output! */
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ]
    
});
