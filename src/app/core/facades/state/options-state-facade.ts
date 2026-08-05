import { Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {OptionsSelectors} from '../../../state/options/options.selectors';
import {IOption, IOptions} from '../../data/endpoints/options/options-api.interface';

export interface IOptionsStateFacade {
  getAllOptions$(): Observable<IOptions>
  getDepartmentsOptions$(): Observable<IOption[]>
}

export class OptionsStateFacade implements IOptionsStateFacade{
  constructor(
    private store: Store,
  ) {
  }
  getAllOptions$(): Observable<IOptions>{
    return this.store.select(OptionsSelectors.getAllOptions)
  }

  getDepartmentsOptions$(): Observable<IOption[]>{
    return this.store.select(OptionsSelectors.getDepartmentsOptions)
  }
}
