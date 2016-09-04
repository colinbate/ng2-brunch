import {Routes, RouterModule} from '@angular/router';

import {Home} from './home';
import {About} from './about';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About}
];

export const routing = RouterModule.forRoot(routes);
