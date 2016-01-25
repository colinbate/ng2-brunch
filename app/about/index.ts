import {Component, ViewEncapsulation, OnInit, OnDestroy, APPLICATION_COMMON_PROVIDERS } from 'angular2/core';
import {CORE_DIRECTIVES, COMMON_DIRECTIVES, FORM_BINDINGS, COMMON_PIPES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'about',
  providers: [APPLICATION_COMMON_PROVIDERS],
  template: `
    <div>This is an application starter written by {{name}}</div>
  `,
  encapsulation: ViewEncapsulation.None,
  directives: [CORE_DIRECTIVES, COMMON_DIRECTIVES, FORM_DIRECTIVES],
  pipes: [COMMON_PIPES]
})

export default class About implements OnInit, OnDestroy  {
  public name: string;
  constructor() {
    this.name = 'Colin';
  }

  ngOnInit() { console.log('About::ngOnInit'); }
  ngOnDestroy() { console.log('About::ngOnDestroy'); }
}