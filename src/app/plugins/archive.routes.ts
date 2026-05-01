import {Routes} from '@angular/router';
import {ClientsComponent} from './clients/clients.component';
import {DocumentsComponent} from './clients/documents/documents.component';
import {AnalyticsComponent} from './analytics/analytics/analytics.component';
import {DataComponent} from './data/data/data.component';
import {RouteNames} from '../shared/consts/route-names';


export const archiveRoutes : Routes = [
  { path: RouteNames.CLIENTS, component: ClientsComponent },
  { path: 'clients/:clientId/documents', component: DocumentsComponent },
  { path: RouteNames.ANALYTICS, component: AnalyticsComponent },
  { path: RouteNames.DATA, component: DataComponent },
]
