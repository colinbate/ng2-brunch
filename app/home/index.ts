import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

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
    <input type="text" [value]="title.value" (input)="title.value = $event.target.value">
    <pre>this.test = {{ title | json }}</pre>
  </div>`
})
export default class Home {
  public title: any;
  constructor() {
    this.title = { value: 'Angular 2' };
  }

  ngOnInit() {
    console.log('hello Home component');
  }

}