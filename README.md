# Brunch with Angular 2

[![Join the chat at https://gitter.im/colinbate/ng2-brunch](https://badges.gitter.im/colinbate/ng2-brunch.svg)](https://gitter.im/colinbate/ng2-brunch?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is an Angular 2.0.0 application, built with [Brunch](http://brunch.io).

> Note that this version of Angular 2 uses an updated module mechanism, along with forms and router which were introduced during the RC phase of the project. Do check out the [Angular 2 site](https://angular.io) if you want more info.

## Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X (or download installer from site). Requires a fairly recent version of Node.
    * [Brunch](http://brunch.io): `npm install -g brunch` (optional)
    * Brunch plugins and dependencies: `npm install`.
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build:prod` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
