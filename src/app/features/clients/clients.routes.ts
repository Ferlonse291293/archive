import {Routes} from '@angular/router';
import {ClientDocumentsComponent} from './client-documents/client-documents.component';
import {ClientsSearchComponent} from './clients-search/clients-search.component';
import {APP_ROUTES} from '../../core/router/routes';

export const clientsRoutes: Routes =  [

  {path: '',
    component: ClientsSearchComponent,
    data: { breadcrumb: APP_ROUTES.CLIENTS_SEARCH.name },
  },
  {
    path: APP_ROUTES.CLIENT_DOCUMENTS.link,
    data: { breadcrumb: APP_ROUTES.CLIENT_DOCUMENTS.name},
    component: ClientDocumentsComponent
  }

]
