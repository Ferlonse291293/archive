import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {inject, Injectable} from '@angular/core';

import {OptionsApi} from '../../core/data/endpoints/options/options-api';
import {OptionsActions} from './options.actions';
@Injectable()
export class OptionsEffects {
  private actions$ = inject(Actions);
  private optionsApi = inject(OptionsApi);





options$ = createEffect(() =>
  this.actions$.pipe(
    ofType(OptionsActions.getOptionsActions.req),
    switchMap((action) =>
      this.optionsApi.getOptions().pipe(
        map(res => {
            return  OptionsActions.getOptionsActions.success({options: res})
          }
        ),
        catchError(error =>
          of(OptionsActions.getOptionsActions.failure({ error }))
        )
      )
    )
  )
)

}
