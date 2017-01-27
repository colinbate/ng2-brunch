import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  styles: [require('./home.component.css')],
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  public title: any;
  constructor() {
    const initial = { value: 'Angular 2' };
    this.title = { ...initial }; // Object spread in TypeScript 2.1!
  }

  ngOnInit() {
    console.log('Hello Home component');
  }
}
