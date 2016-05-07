import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'about',
  template: require('./about.component.html')()
})

export default class AboutComponent implements OnInit, OnDestroy {
  public name: string;
  constructor() {
    this.name = 'Brunch';
  }

  ngOnInit() { console.log('About::ngOnInit'); }
  ngOnDestroy() { console.log('About::ngOnDestroy'); }
}
