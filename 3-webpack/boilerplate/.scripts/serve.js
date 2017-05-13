const chalk = require('chalk');
const config = require('./config');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

module.exports = function(options) {
  return new Promise((resolve, reject) => {
      process.env.PORT = config.server_port;
      process.env.HOST = config.server_host;      
      process.env.NODE_ENV = 'development';      

      let webpackConfig = require('./webpack.' + process.env.NODE_ENV);
      const compiler = webpack(webpackConfig);
      
      let webpackDevServerOptions = {
         contentBase: config.out_path,
         stats: {
          colors: true,
        }
      }      
      if (config.use_hmr) {
        webpackDevServerOptions.hot = false; /* doesn't seems to work / reload everything instead */
        webpackDevServerOptions.inline = true;
      }
      const server = new WebpackDevServer(compiler, webpackDevServerOptions);
      
      server.listen(process.env.PORT, process.env.HOST, (error) => {
        if (error) {
           reject(error);
           return;
        }
        console.log();
        console.log(chalk.gray(`Starting server at ${chalk.green(`http://${process.env.HOST}:${process.env.PORT}`)}`));
        console.log();
      });
  });
};
