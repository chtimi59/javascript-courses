# NodeJS

nodeJS allows to run javascript without browser

npm is the package manager of NodeJs

npm >3.10.8 (should comes with nodeJS >6.9.1)

- [https://nodejs.org/en/](https://nodejs.org/en/)
- [https://www.npmjs.com/package/cli](https://www.npmjs.com/package/cli)

# Do it by 'hand'

```sh
> npm install
-- markdown@0.5.0
  -- nopt@2.1.2
    -- abbrev@1.1.0

> node src\app.js
Bonjour !
Bye bye !
<p>Un paragraphe en <strong>markdown</strong> !</p>
Hello world!
```

# Initiate a *package.json*

```sh
npm init
```

# Add new package

```sh
npm install -S markdown
npm install -D markdown #for dev only
npm install -g markdown #for global install
```

# Package update

```sh
npm update
```

# Install packages
When you only provides a *package.json*, then */node_module* is empty, so user needs to write:
```sh
npm install
```

# Visual Code IDE
Use Visual Studio Code for editing/compilation/debug

[https://code.visualstudio.com/](https://code.visualstudio.com/)

```sh
code .
```

- Click on app.js
- hit F5
