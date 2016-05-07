import {Component} from '@angular/core';
import {Routes, Route, Router, ROUTER_DIRECTIVES} from '@angular/router';
import {FORM_PROVIDERS} from '@angular/common';

import {Home} from './home';
import {About} from './about';
import {NavBar} from './navbar.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [...FORM_PROVIDERS],
  directives: [...ROUTER_DIRECTIVES, NavBar],
  pipes: [],
  styles: [`
    :host {
      font-family: sans-serif;
    }
    header, footer, main {
      margin: 0 1em;
    }
    footer {
      margin-top: 1em;
      border-top: 1px solid #ccc;
      padding-top: 0.5em;
    }
  `],
  template: `
    <header>
      <h1>Hello {{ name }}</h1>
    </header>
    <navbar></navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      Brunch for Angular 2 by <a [href]="url">Colin Bate</a>
    </footer>
  `
})
@Routes([
  new Route({path: '', component: Home}),
  new Route({path: 'about', component: About})
])
export class App {
  name: string = 'Brunch for Angular 2';
  url: string = 'http://colin.is/blog';
  constructor() {

  }
}
