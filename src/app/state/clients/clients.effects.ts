import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ClientsActions} from './clients.actions';
import {catchError, map, of, switchMap} from 'rxjs';
import {ClientsApi} from '../../core/data/endpoints/clients/clients.api';



@Injectable()
export class ClientsEffects {
  private actions$ = inject(Actions);
  private clientApi = inject(ClientsApi);

  getIndividualClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientsActions.getIndividualClients.req),
      switchMap((action) =>
        this.clientApi.getIndividualClients(action.req ).pipe(
          map(res => {
             return  ClientsActions.getIndividualClients.success({clientsRes: res})
          }
          ),
          catchError(error =>
            of(ClientsActions.getIndividualClients.failure({ error }))
          )
        )
      )
    )
  );

  getIndividualClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientsActions.getIndividualClient.req),
      switchMap((action) =>
        this.clientApi.getIndividualClient(action.id).pipe(
          map(res => {
              return  ClientsActions.getIndividualClient.success({client: res})
            }
          ),
          catchError(error =>
            of(ClientsActions.getIndividualClient.failure({ error }))
          )
        )
      )
    )
  );
}
