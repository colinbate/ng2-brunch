# Brunch with Angular

[![Join the chat at https://gitter.im/colinbate/ng2-brunch](https://badges.gitter.im/colinbate/ng2-brunch.svg)](https://gitter.im/colinbate/ng2-brunch?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is an Angular ^2.4.1 application, built with [Brunch](http://brunch.io). It uses TypeScript ^2.1.4

> Note that due to a bug in TypeScript 2.1.4 the output to `npm test` will complain about missing `tslib`.

> This version does not pin a specific version of Angular as it did in the past. All Angular 2 versions should be non-breaking.

## Getting started

You will need [Node.js](http://nodejs.org) installed. Recommend version 6.9.1 or later. Make sure you have at least version 4 and NPM 3.

If you plan to work with Brunch regularly, you may want to install it globally: `npm install -g brunch`

With Brunch installed globally you can simply run `brunch new -s colinbate\ng2-brunch` to initialize a folder with this project.

Otherwise clone this repository, remove the `.git` folder, and run `npm install`.

### Run

* `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
* `npm run build:prod` — builds minified project for production

### Learn

* `public/` dir is fully auto-generated and served by HTTP server.
* Write your code in `app/` dir.
* Place static files in `app/assets/`. These will be copied directly.
* [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
