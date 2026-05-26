import {Routes} from '@angular/router';
import {AnalyticsComponent} from './analytics/analytics/analytics.component';
import {DataComponent} from './data/data/data.component';

import {clientsRoutes} from './clients/clients.routes';
import {RouteNames} from '../core/router/route-names';



export const archiveRoutes : Routes = [
  {
    path: '',
    redirectTo: RouteNames.PLUGIN_HUB,
    pathMatch: 'full'
  },
  {
    path:  RouteNames.PLUGIN_HUB,
    loadComponent: () =>
      import('./features-hub/features-hub.component')
        .then(m => m.FeaturesHubComponent),
  },


  {

    path: RouteNames.CLIENTS,
    loadComponent: () =>
      import('./clients/clients-feature.component')
        .then(m => m.ClientsFeatureComponent),
    children: clientsRoutes

  },




  { path: RouteNames.ANALYTICS, component: AnalyticsComponent },
  { path: RouteNames.DATA, component: DataComponent },

]
