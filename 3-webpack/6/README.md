# WebPack queuing loaders 

*comment-loader.js*
```js
module.exports = function(source) {
  var str = "/*" + source + "*/";
  return str;
};
```

*encapsulate-loader.js*
```js
module.exports = function(source) {
  return '/*IN*/'+source+'/*OUT*/';
};
```

*Index.js*:
Notice that this time we use a txt file
```js
import 'encapsulate-loader.js./comment-loader.js!./file.txt';
```

So now bundle.js look like this:
```js
function(module, exports) {

/*IN*//*Hello world !*//*OUT*/

/***/ }
```