# Fixing with WebPack...

## 1- First let's install the libs that we need
Our package.json actually looks like this:
```json
{
  "devDependencies": {
    "webpack": "^2.4.1"
  },
  "dependencies": {
    "lodash": "^4.17.4"
  }
}
```
run to install those third parties
```
npm install
```

## 2- Second let's modify our sources

index.js now contains

```js
import _ from 'lodash'; // ES2015
```

Generate a bundle with:
```
webpack app/index.js build/bundle.js
```

Index.html can now looks like this:
```html
<html>
  <head>
    <title>webpack 2 demo</title>
  </head>
  <body>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

so "import" as been interpreted by WebPack in order to insert lodash library