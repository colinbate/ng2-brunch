import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
  selector: 'home',
  directives: [
    ...FORM_DIRECTIVES
  ],
  pipes: [],
  styles: [],
  template: `
  <div>
    <div>Your Content Here</div>
    <input type="text" [value]="title.value" (input)="hello($event)">
    <pre>test</pre>
    <div [textContent]="title.value"></div>
    <button (click)="hello()">Test</button>
  </div>`
})
export default class Home {
  // TypeScript public modifiers
  public title: any;
  constructor() {
    this.title = { value: 'Angular 2' };
    console.log('Home constructor', this.title);
  }
  
  hello(ev) {
    this.title.value = ev.target.value;
    console.log('INPUT', this.title);
  }

  ngOnInit() {
    console.log('hello Home component');
  }

}