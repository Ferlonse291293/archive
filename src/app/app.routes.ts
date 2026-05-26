import { Routes } from '@angular/router';
import {archiveRoutes} from './features/archive.routes';

import {authRoutes} from './auth/auth.routes';
import {RouteNames} from './core/router/route-names';
import {authGuard} from './core/guards/auth.guard';









export const routes: Routes = [
  ///REDIRECT
  {
    path: '',
    redirectTo: RouteNames.AUTH,
    pathMatch: 'full'
  },
     ///AUTH
  {
    path: RouteNames.AUTH,
    loadComponent: () =>
      import('./auth/auth.component').then(m => m.AuthComponent),

    children: authRoutes
  },
     ///HOME
  {
    path: RouteNames.HOME,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent),
    children: archiveRoutes
  },
  ///NOT-FOUND
  // {
//     path: '**',
//     redirectTo: 'app-not-found',
//     pathMatch: 'full'
//   }
];


