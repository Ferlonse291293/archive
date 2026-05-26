import {inject, Injectable} from '@angular/core';
import {StoreFacadeKey} from './store-facade.registry';
import {AuthDataFacade} from './data/auth-data-facade';
import {AuthStateFacade} from './state/auth-state-facade';
import {Actions} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ClientStateFacade} from './state/client-state-facade';
import {ClientDataFacade} from './data/client-data-facade';
import {DocumentsDataFacade} from './data/documents-data.facade';
import {DocumentStateFacade} from './state/document-state.facade';

@Injectable({providedIn: 'root'})
export class StoreFacadeService {
  private readonly dataFacades: Partial<Record<StoreFacadeKey, any>>;
  private readonly stateFacades: Partial<Record<StoreFacadeKey, any>>;
  private actions$ = inject(Actions);
  private store= inject(Store);

  constructor() {
    this.dataFacades = {
      AUTH: new AuthDataFacade(this.actions$, this.store),
      CLIENTS: new ClientDataFacade(this.actions$, this.store),
      DOCUMENTS: new DocumentsDataFacade(this.actions$, this.store)
    };

    this.stateFacades = {
      AUTH: new AuthStateFacade(this.store),
      CLIENTS: new ClientStateFacade(this.store),
      DOCUMENTS: new DocumentStateFacade(this.store)
    };
  }

  getDataFacade(key: StoreFacadeKey){
    return  this.dataFacades[key];
  }

  getStateFacade(key: StoreFacadeKey){
    return this.stateFacades[key];
  }
}
