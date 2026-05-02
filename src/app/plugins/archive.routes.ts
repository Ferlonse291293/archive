import {Routes} from '@angular/router';
import {ClientsComponent} from './clients/clients.component';
import {DocumentsComponent} from './clients/documents/documents.component';
import {AnalyticsComponent} from './analytics/analytics/analytics.component';
import {DataComponent} from './data/data/data.component';
import {RouteNames} from '../shared/consts/route-names';
import {PluginHubComponent} from './plugin-hub/plugin-hub.component';


export const archiveRoutes : Routes = [
  {
    path: '',
    redirectTo: RouteNames.PLUGIN_HUB,
    pathMatch: 'full'
  },
  {
    path:  RouteNames.PLUGIN_HUB,
    loadComponent: () =>
      import('./plugin-hub/plugin-hub.component')
        .then(m => m.PluginHubComponent)
  },
  { path: RouteNames.CLIENTS, component: ClientsComponent },
  { path: 'clients/:clientId/documents', component: DocumentsComponent },
  { path: RouteNames.ANALYTICS, component: AnalyticsComponent },
  { path: RouteNames.DATA, component: DataComponent },

]
