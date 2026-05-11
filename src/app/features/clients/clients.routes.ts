import {Routes} from '@angular/router';
import {ClientDocumentsComponent} from './client-documents/client-documents.component';
import {ClientsSearchComponent} from './clients-search/clients-search.component';

export const clientsRoutes: Routes =  [

  {path: '', component: ClientsSearchComponent},
  {path: ':id', component: ClientDocumentsComponent}

]
