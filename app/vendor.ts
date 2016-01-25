import 'es6-shim';
import 'es6-promise';
import 'zone.js/lib/browser/zone-microtask';

if ('production' === 'BRUNCH_ENVIRONMENT') {
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