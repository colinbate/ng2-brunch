import {Component} from '@angular/core';
//import {ROUTER_DIRECTIVES} from '@angular/router';
//import {NavBarComponent} from './navbar.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  //directives: [...ROUTER_DIRECTIVES, NavBarComponent],
  // pipes: [],
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
export class AppComponent {
  name: string = 'Brunch for Angular 2';
  url: string = 'http://colin.is/blog';
  constructor() {

  }
}
