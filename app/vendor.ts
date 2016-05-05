import 'es6-shim';
import 'es6-promise';
import 'zone.js/dist/zone.js';
import 'reflect-metadata';
import '@angular/compiler';
import '@angular/platform-browser';

if ('production' === 'BRUNCH_ENVIRONMENT') {
  let ngCore = require('@angular/core');
  ngCore.enableProdMode();
}
