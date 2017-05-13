const config = require('./config');
const common = require('./webpack.common');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let webPackConf = {

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
           __VERSION__: JSON.stringify(config.package.version)
      }),

      /* html file */
      new HtmlWebpackPlugin({
            filename: 'index.html',
            template:  config.src_path + '/assets/index.html',
            inject: true,
            cache: true
       }),
    ]  
}

webPackConf = merge(common.conf,webPackConf);

if (config.use_hmr) {
  webPackConf.entry.hmr = [];
  webPackConf.entry.hmr.push('webpack/hot/only-dev-server');
  webPackConf.entry.hmr.push(`webpack-dev-server/client?http://${config.server_host}:${config.server_port}/`);
  webPackConf.plugins.push(new webpack.HotModuleReplacementPlugin());
}



module.exports = webPackConf;

