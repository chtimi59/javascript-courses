const chalk = require('chalk');
const conf = require('./config');
const webpack = require('webpack');

module.exports = function(options) {
  return new Promise((resolve, reject) => {
    // options : production or development
    process.env.NODE_ENV = options || process.env.NODE_ENV || 'production';
    const webpackConfig = require('./webpack.' + process.env.NODE_ENV);
    console.log("build: " + chalk.white.bgGreen(' ' + process.env.NODE_ENV + ' '));

    webpack(webpackConfig).run((err, stats) => {
        if (err) {
          reject({msg: 'webpack error', data: err});                    
        }
        if (stats.compilation.errors.length) {
          reject({msg: 'webpack error', data: stats.compilation.errors});
        }
        if (process.env.CI && stats.compilation.warnings.length) {
          reject({msg: 'webpack, when process.env.CI = true, warnings are treated as failures. Most CI servers set this automatically.', data: stats.compilation.errors});
        }

        resolve();
    }
  )});
};
