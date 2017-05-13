const fs = require('fs-extra');
const path = require('path');
const hjson = require('hjson');

let root_path = path.resolve(__dirname, '../') + '/';

/* Here we're note using require('file.json')
 for several reasons, see this thread
 http://stackoverflow.com/questions/5726729/how-to-parse-json-using-node-js
*/
function loadJson(jsonFile) {
    return hjson.parse(fs.readFileSync(root_path + jsonFile, 'utf8'));
}

exports.set = loadJson('config.json');
exports.package = loadJson('package.json');
exports.tsconfig = loadJson('tsconfig.json');
exports.tslint = loadJson('tslint.json');

exports.root_path = root_path;
exports.nodeModules_path = root_path + 'node_modules';
exports.src_path = root_path + (exports.set.src_path||'src');
exports.out_path = root_path + (exports.set.out_path||'dist');
exports.server_port = (exports.set.server_port||80);
exports.server_host = (exports.set.server_host||'localhost');
exports.use_hmr = (exports.set.use_hmr||false);

