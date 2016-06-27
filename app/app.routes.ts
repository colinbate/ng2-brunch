import {provideRouter, RouterConfig} from '@angular/router';
import {Home} from './home';
import {About} from './about';

export const routes: RouterConfig = [
  {path: '', component: Home},
  {path: 'about', component: About}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
