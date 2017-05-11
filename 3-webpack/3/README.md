# WebPack by using *webpack.config.js*

webpack.config.js contains:
```js
console.log("Hello!");

var path = require('path');

console.log(path.resolve(__dirname, 'build'));

module.exports = {
  entry: [ './app/index.js' ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};
```

so after updating *package.json*:
```js
  "scripts": {
    "build": "webpack -d --devtool source-map",
    "clean": "rimraf build/{css/*,js/*,images/*}"
  },
```

we now simply do:
```
npm run install
npm run build
npm run start
```

# Visual Code IDE
Use Visual Studio Code for editing/compilation/debug

[https://code.visualstudio.com/](https://code.visualstudio.com/)

```sh
code .
```
You need to install:
[Chrome debug install](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code)

- Compile with Ctrl+Shift+B (this is a watch operation, so one time is enough)
- hit F5