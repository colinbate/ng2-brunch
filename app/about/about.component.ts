import {Component} from '@angular/core';

@Component({
  selector: 'about',
  template: require('./about.component.html')()
})

export default class About {
  public name: string;
  constructor() {
    this.name = 'Brunch';
  }

  ngOnInit() { console.log('About::ngOnInit'); }
  ngOnDestroy() { console.log('About::ngOnDestroy'); }
}
