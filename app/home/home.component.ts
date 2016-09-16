import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  styles: [require('./home.component.css')],
  template: require('./home.component.html')
})
export default class HomeComponent implements OnInit {
  public title: any;
  constructor() {
    this.title = { value: 'Angular 2' };
  }

  ngOnInit() {
    console.log('Hello Home component');
  }
}
