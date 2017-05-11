# TypeScript

[https://www.typescriptlang.org/](https://www.typescriptlang.org/)

The goal is to makes js a full language with typing/class/abstract, independant of ECMAScript version.

This allow to cover past and future release of ECMAScript.

Install:
```sh
npm i -g typescript
```

# Do it by 'hand'

```sh
tsc src/app.ts
node src/app.js
```

# Initiate a *tsconfig.json*

```sh
tsc -init
```

Example:
```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": true,
        "outDir": "./dist"
    },
    "include": [
        "./src/**/*"
    ]
}
```

Result:
```sh
> tsc
> node dist/app.js
[ { name: 'Joe', age: 42 } ]
end
```

# Visual Code IDE
Use Visual Studio Code for editing/compilation/debug

[https://code.visualstudio.com/](https://code.visualstudio.com/)

```sh
code .
```

- Compile with Ctrl+Shift+B (this is a watch operation, so one time is enough)
- hit F5

