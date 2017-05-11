# WebPack "import/require" interpretation

note: **import** is actually new in ECMA script 6, but allowed as we use WebPack build process

*index.js* contains:
```js
import './file.js';
```

*file.js* contains:
```js
console.log('hello');
```

so *bundle.js* will contains:
```js
function(module, exports) {
  console.log('hello');
}

function(module, __webpack_exports__, __webpack_require__) {
     "use strict";
     Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
     /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_js__ = __webpack_require__(/*! ./file.js */ 0);
     /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__file_js__);
}
```

hence after
```
npm run install
npm run build
npm run start
```
loading [http://localhost:8080](http://localhost:8080) will shows 'hello' in the console

## fixing path

if *index.js* use the following line (no './'):
```js
import 'file.js';
```

The we need to specify resolving path by adding the following line in your webpconfig.js:
```js
resolve: {
    modules: [
        path.join(__dirname, "node_modules"),
        path.join(__dirname, "src"),
    ]
}
```