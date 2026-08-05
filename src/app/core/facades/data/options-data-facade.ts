import {Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';

import {firstValueFrom, map, take} from 'rxjs';

import {OptionsActions} from '../../../state/options/options.actions';



export interface IOptionsDataFacade {
  getOptions(): Promise<void>
}




export class OptionsDataFacade implements IOptionsDataFacade {
  constructor(
    private actions$: Actions,
    private store: Store,
  ) {
  }

  getOptions(): Promise<void> {
    const requestId = crypto.randomUUID();
    this.store.dispatch(OptionsActions.getOptionsActions.req())

    return firstValueFrom(
      this.actions$.pipe(
        ofType(OptionsActions.getOptionsActions.success, OptionsActions.getOptionsActions.failure),
        take(1),
        map((action: any) => {
          if (action.type === OptionsActions.getOptionsActions.success.type) {
            return ;
          }

          throw action.error;
        })
      )
    );
  }
}
