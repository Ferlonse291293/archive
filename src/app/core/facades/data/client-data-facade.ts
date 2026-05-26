import {Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {firstValueFrom, map, take} from 'rxjs';
import {ClientsActions} from '../../../state/clients/clients.actions';
import {IClient, IGetClientsReq, IGetClientsRes} from '../../data/endpoints/clients/clients-api.interface';


export interface IClientDataFacade {
  getClient(id: string): Promise<IClient>
  getClients(req: IGetClientsReq): Promise<IGetClientsRes>
}

export class ClientDataFacade implements IClientDataFacade {
  constructor(
    private actions$: Actions,
    private store: Store,
  ) {
  }

  getClient(id: string): Promise<IClient> {
    const requestId = crypto.randomUUID();
    this.store.dispatch(ClientsActions.getClient.req({id: id}))

    return firstValueFrom(
      this.actions$.pipe(
        ofType(ClientsActions.getClient.success, ClientsActions.getClient.failure),
        take(1),
        map((action: any) => {
          if (action.type === ClientsActions.getClient.success.type) {
            return action.client;
          }

          return   action.error;
        })
      )
    );
  }

  getClients(req: IGetClientsReq): Promise<IGetClientsRes> {

    this.store.dispatch(ClientsActions.getClients.req({req: req}))

    return firstValueFrom(
      this.actions$.pipe(
        ofType(ClientsActions.getClients.success, ClientsActions.getClients.failure),
        take(1),
        map((action: any) => {
          if (action.type ===ClientsActions.getClients.success.type) {
            return action.clientsRes;
          }

          return   action.error;
        })
      )
    );
  }
}
