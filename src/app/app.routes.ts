import { Routes } from '@angular/router';
import {archiveRoutes} from './features/archive.routes';

import {authRoutes} from './auth/auth.routes';
import {APP_ROUTES } from './core/router/routes';
import {authGuard} from './core/guards/auth.guard';









export const routes: Routes = [
  ///REDIRECT
  {
    path: '',
    redirectTo: APP_ROUTES.AUTH.link,
    pathMatch: 'full'
  },
     ///AUTH
  {
    path: APP_ROUTES.AUTH.link,
    loadComponent: () =>
      import('./auth/auth.component').then(m => m.AuthComponent),
    data: { breadcrumb: APP_ROUTES.AUTH.name },
    children: authRoutes
  },
     ///HOME
  {
    path: APP_ROUTES.HOME.link,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent),
    data: { breadcrumb: APP_ROUTES.HOME.name },
    children: archiveRoutes
  },
  ///NOT-FOUND
  // {
//     path: '**',
//     redirectTo: 'app-not-found',
//     pathMatch: 'full'
//   }
];


