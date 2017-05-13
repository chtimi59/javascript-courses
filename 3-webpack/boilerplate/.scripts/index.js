#!/usr/bin/env node
const chalk = require('chalk'); // -- console colors
const config = require('./config');  // -- a list of projects paths and defintion
const program = require('commander').version(config.package.version || '0.0.1'); // -- command line options

// ---- helpers ----

/* command ends with success */
function onSuccess(msg) {
   console.log(chalk.white.bgGreen(' [success] ' + (msg||'')));
   process.exit();
}

/* command ends with error */
function onError(error) {
    do {
      if (!error) {
        console.error(chalk.white.bgRed(' [failed] '));
        break;
      };
      // ex: reject('error');
      if (typeof error === 'string' || error instanceof String) {
        console.error(chalk.white.bgRed(' [failed] ' + error));
        break;
      };
      // ex: reject({"msg":"failed to clean", "data": [{field:2,fieldd:'youpi'}, "deux"] });
      if (error.msg) {
        console.error(chalk.white.bgRed(' [failed] ' + error.msg));
        error = error.data;
      }      
      // ex: reject(['error1','error2']);
      if (typeof error === 'array' || error instanceof Array) {
        console.error(chalk.red('-------------------------------'));
        error.forEach((d) => {
          console.error((typeof d === 'string' || d instanceof String) ? chalk.red(d) : d );
          console.error();
        });
        break;
      };
      // ex: reject({field:2,fieldd:'youpi'});
      console.error(chalk.white.bgRed(' [failed] '));
      console.error(error);
    } while(0);
    process.exit(/*1*/);
}

/* add a new command */
function registerCommand(command, description, subscriptName, options) {
  program.command(command).description(description).action((options)=>require('./'+subscriptName)(options).then(onSuccess, onError));
}

// ---- LIST OF COMMANDS ----

registerCommand('serve [options]', 'Serve the project', 'serve');
registerCommand('build [options]', 'Build the project', 'build');
registerCommand('clean', 'Clean the project', 'clean');

// ---- nodejs app ----

program.action(() => { program.help(); });
program.parse(process.argv);
if (program.args.length === 0) { program.help(); }

