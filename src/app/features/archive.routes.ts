import {Routes} from '@angular/router';
import {AnalyticsComponent} from './analytics/analytics/analytics.component';
import {DataComponent} from './data/data/data.component';

import {clientsRoutes} from './clients/clients.routes';
import {APP_ROUTES} from '../core/router/routes';



export const archiveRoutes : Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.FEATURES_HUB.link,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTES.FEATURES_HUB.link,
    loadComponent: () =>
      import('./features-hub/features-hub.component')
        .then(m => m.FeaturesHubComponent),
    data: { breadcrumb: APP_ROUTES.FEATURES_HUB.name },
  },


  {

    path: APP_ROUTES.CLIENTS.link,
    loadComponent: () =>
      import('./clients/clients-feature.component')
        .then(m => m.ClientsFeatureComponent),
    data: { breadcrumb: APP_ROUTES.CLIENTS.name },
    children: clientsRoutes

  },




  {
    path: APP_ROUTES.ANALYTICS.link,
    component: AnalyticsComponent ,
    data: { breadcrumb: APP_ROUTES.ANALYTICS.name },
  },
  // {
  //   path:  APP_ROUTES.DATA.link,
  //   component: DataComponent,
  //   data: { breadcrumb: APP_ROUTES.ANALYTICS.name },
  // },

]
