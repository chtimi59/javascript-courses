const fs = require('fs-extra');
const conf = require('./config');

module.exports = function(options) {
  return new Promise((resolve, reject) => {
    console.log("cleanning: " + conf.out_path)
    fs.emptyDir(conf.out_path, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
};
