import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {APP_ROUTES} from '../core/router/routes';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.LOGIN.link,
    pathMatch: 'full'
  },
  {
    path:  APP_ROUTES.LOGIN.link,
    component: LoginComponent,
    data: { breadcrumb: APP_ROUTES.LOGIN.name },
  },


]
