import 'es6-shim';
import 'es6-promise';
import 'zone.js/lib/browser/zone-microtask';
//import 'es7-reflect-metadata/dist/browser';

if ('production' !== process.env.ENV) {
  Error['stackTraceLimit'] = Infinity;
  Zone['longStackTraceZone'] = require('zone.js/lib/zones/long-stack-trace.js');
}

if ('production' === process.env.ENV) {
  let ngCore = require('angular2/core');
  ngCore.enableProdMode();
}
// Angular 2
import 'angular2/platform/browser';
import 'angular2/platform/common_dom';
import 'angular2/router';
import 'angular2/http';
import 'angular2/core';

// RxJS
import 'rxjs';