import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RouteNames} from '../core/router/route-names';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: RouteNames.LOGIN,
    pathMatch: 'full'
  },

  {path:  RouteNames.LOGIN, component: LoginComponent},


]
