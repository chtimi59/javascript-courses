# WebPack loaders
Loaders are transformations that are applied on the source code of a module. They allow you to preprocess files as you require() or “load” them. Thus, loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle front-end build steps. Loaders can transform files from a different language (like TypeScript) to JavaScript, or inline images as data URLs. Loaders even allow you to do things like require() CSS files right in your JavaScript!

A loader is a node module exporting a function.

This function is called when a resource should be transformed by this loader.

Example: *comment-loader.js* to comment out 'source'
```js
module.exports = function(source) {
  var str = "/*" + source + "*/";
  return str;
};
```

index.js:
```js
import './comment-loader.js!./file.js';
```

so now bundle.js look like this:
```js
function(module, exports) {

/*console.log('hello');*/

}

function(module, __webpack_exports__, __webpack_require__) {
  "use strict";
  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comment_loader_js_file_js__ = __webpack_require__(/*! ./comment-loader.js!./file.js */ 0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comment_loader_js_file_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__comment_loader_js_file_js__);
}
```