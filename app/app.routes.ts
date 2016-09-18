import {Routes, RouterModule} from '@angular/router';

import {Home} from './home';
import {About} from './about';

export const routes: Routes = [
  {path: '', component: Home, pathMatch: 'full'},
  {path: 'about', component: About}
];

export const routing = RouterModule.forRoot(routes);
