import {Component, OnInit} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

@Component({
  selector: 'home',
  directives: [
    ...FORM_DIRECTIVES
  ],
  pipes: [],
  styles: [],
  template: require('./home.component.html')()
})
export default class HomeComponent implements OnInit {
  public title: any;
  constructor() {
    this.title = { value: 'Angular 2' };
  }

  ngOnInit() {
    console.log('hello Home component');
  }

}
