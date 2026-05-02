import { Routes } from '@angular/router';
import {archiveRoutes} from './plugins/archive.routes';
import {RouteNames} from './shared/consts/route-names';








export const routes: Routes = [
  ///REDIRECT
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
     ///AUTH
  {
    path: RouteNames.AUTH,
    loadComponent: () =>
      import('./auth/auth.component').then(m => m.AuthComponent),
    children: archiveRoutes
  },
     ///HOME
  {
    path: 'home',
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


