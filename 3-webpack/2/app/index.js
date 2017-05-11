import _ from 'lodash'; // ES6 (2015)
/* import/export : Module is new in ES6
   require/module.export : Is a CommonJS/Webpack/NodeJs way to load things
*/

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());