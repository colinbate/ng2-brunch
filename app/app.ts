import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './directives/router-active';
import Home from './home';
import About from './about';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive, About ],
  pipes: [],
  styles: [`
    nav ul {
      list-style-type: none;
      margin: 1em 0;
      padding: 0;
    }
    nav li {
      display: inline-block;
      padding: 0.25em;
    }
    nav li.active {
      background-color: lightgray;
    }
    footer {
      margin-top: 1em;
      border-top: 1px solid #ccc;
      padding-top: 0.5em;
    }
  `],
  template: `
    <header>
      <nav>
        <h1>Hello {{ name }}</h1>
        <ul>
          <li router-active="active">
            <a [routerLink]=" ['Home'] ">Home</a>
          </li>
          <li router-active="active">
            <a [routerLink]=" ['About'] ">About</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      Brunch for Angular 2 by <a [href]="url">Colin Bate</a>
    </footer>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/**', redirectTo: ['Home'] }
])
export class App {
  name = 'Brunch for Angular 2';
  url = 'http://colin.is';
  constructor() {

  }
}
