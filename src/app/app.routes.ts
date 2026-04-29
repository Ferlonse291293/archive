import { Routes } from '@angular/router';
import {archiveRoutes} from './modules/archive.routes';
import {HomeComponent} from './home/home/home.component';
import {AuthComponent} from './auth/auth/auth.component';
import {RouteNames} from './shared/consts/route-names';






export const routes: Routes = [
  // 🔓 Публичная зона
  {
    path: RouteNames.AUTH,
    component: AuthComponent
  },

  // 🔒 Приватная зона
  {
    path: '',
    component: HomeComponent,
    // canActivate: [authGuard], // 👈 защита
    children: [
      {
        path: RouteNames.ARCHIVE,
        children:  archiveRoutes
      }
    ]
  },

  // редирект по умолчанию
  {
    path: '',
    redirectTo: 'archive/clients',
    pathMatch: 'full'
  }
];
