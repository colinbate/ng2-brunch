import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'navbar',
  directives: [ROUTER_DIRECTIVES],
  styles: [`
    nav ul {
      list-style-type: none;
      margin: 1em 0;
      padding: 0 1em;
      border-top: 1px solid #069;
      border-bottom: 1px solid #069;
    }
    nav li {
      display: inline-block;
      padding: 0;
    }
    nav a {
      color: #069;
      text-decoration: none;
      padding: 0.5em;
      display: inline-block;
    }
    nav .active {
      
      background-color: #069;
      color: #fff;
    }
  `],
  template: `
    <nav>
      <ul>
        <li>
          <a [routerLink]="['']" [class.active]="isActive('/')">Home</a>
        </li>
        <li>
          <a [routerLink]="['about']" [class.active]="isActive('/about')">About</a>
        </li>
      </ul>
    </nav>
  `
})
export class NavBar {
  constructor(public loc: Location) {}
  
  isActive(path: string) {
    return (this.loc.path() || '/') === path;
  }
}
