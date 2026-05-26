import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ClientsActions} from './clients.actions';
import {catchError, map, of, switchMap} from 'rxjs';
import {ClientsApi} from '../../core/data/endpoints/clients/clients.api';



@Injectable()
export class ClientsEffects {
  private actions$ = inject(Actions);
  private clientApi = inject(ClientsApi);

  getClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientsActions.getClients.req),
      switchMap((action) =>
        this.clientApi.getClients(action.req).pipe(
          map(res => {
             return  ClientsActions.getClients.success({clientsRes: res})
          }
          ),
          catchError(error =>
            of(ClientsActions.getClients.failure({ error }))
          )
        )
      )
    )
  );

  getClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientsActions.getClient.req),
      switchMap((action) =>
        this.clientApi.getClient(action.id).pipe(
          map(res => {
              return  ClientsActions.getClient.success({client: res})
            }
          ),
          catchError(error =>
            of(ClientsActions.getClient.failure({ error }))
          )
        )
      )
    )
  );
}
