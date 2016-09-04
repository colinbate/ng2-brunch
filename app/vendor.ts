import 'es6-shim';
import 'es6-promise';
import 'zone.js/dist/zone';
import 'reflect-metadata';
import '@angular/compiler';
import '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import 'rxjs';


// if ('production' === 'BRUNCH_ENVIRONMENT') {
//   let ngCore = require('@angular/core');
//   ngCore.enableProdMode();
if ('development' === 'BRUNCH_ENVIRONMENT') {
  enableProdMode();
}
