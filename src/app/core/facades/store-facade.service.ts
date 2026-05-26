import {inject, Injectable} from '@angular/core';
import {DataFacadeMap, StateFacadeMap, StoreFacadeKey} from './store-facade.registry';
import {AuthDataFacade} from './data/auth-data-facade';
import {AuthStateFacade} from './state/auth-state-facade';
import {Actions} from '@ngrx/effects';
import {Store} from '@ngrx/store';

@Injectable({providedIn: 'root'})
export class StoreFacadeService {
  private readonly dataFacades: Partial<Record<StoreFacadeKey, any>>;
  private readonly stateFacades: Partial<Record<StoreFacadeKey, any>>;
  private actions$ = inject(Actions);
  private store= inject(Store);

  constructor() {
    this.dataFacades = {
      AUTH: new AuthDataFacade(this.actions$, this.store)
    };

    this.stateFacades = {
      AUTH: new AuthStateFacade(this.store)
    };
  }

  getDataFacade(key: StoreFacadeKey){
    return  this.dataFacades[key];
  }

  getStateFacade(key: StoreFacadeKey){
    return this.stateFacades[key];
  }
}
