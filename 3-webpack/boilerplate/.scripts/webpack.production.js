const config = require('./config');
const common = require('./webpack.common');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let webPackConf = {

    plugins: [

      /* force Loader option */
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),

     /* global definition */
      new webpack.DefinePlugin({
           __PROD__: JSON.stringify(false),
           __VERSION__: JSON.stringify(config.package.version)
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
      }),

      /* html file */
      new HtmlWebpackPlugin({
            filename: 'index.html',
            title: config.package.name,
            template:  config.src_path + '/assets/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
       })
    ]
    
};

webPackConf = merge(common.conf,webPackConf);

module.exports = webPackConf;