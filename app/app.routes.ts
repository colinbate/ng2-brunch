import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {AboutComponent} from './about';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
