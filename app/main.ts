import './vendor';
import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app.component';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
  bootstrap(App, [
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: PathLocationStrategy })
  ])
  .catch(err => console.error(err));
});
