import {Component} from '@angular/core';
import {Routes, Route, Router, ROUTER_DIRECTIVES} from '@angular/router';
import {FORM_PROVIDERS} from '@angular/common';

import {Home} from './home';
import {About} from './about';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [...FORM_PROVIDERS],
  directives: [...ROUTER_DIRECTIVES, About],
  pipes: [],
  styles: [`
    :host {
      font-family: sans-serif;
    }
    nav ul {
      list-style-type: none;
      margin: 1em 0;
      padding: 0;
    }
    nav li {
      display: inline-block;
      padding: 0.25em;
    }
    nav .active {
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
          <li>
            <a [routerLink]="['']">Home</a>
          </li>
          <li>
            <a [routerLink]="['about']">About</a>
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
@Routes([
  new Route({path: '/', component: Home}),
  new Route({path: 'about', component: About})
])
export class App {
  name: string = 'Brunch for Angular 2';
  url: string = 'http://colin.is/blog';
  constructor() {

  }
}
