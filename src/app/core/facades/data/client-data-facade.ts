import {Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {firstValueFrom, map, take} from 'rxjs';
import {ClientsActions} from '../../../state/clients/clients.actions';
import {
  IClientIndividualDetail, IClientIndividualListItem, IClientIndividualsFilter,
  IClientPagination, IGetClientsReq,
} from '../../data/endpoints/clients/clients-api.interface';


export interface IClientDataFacade {
  getIndividualClient(id: string): Promise<IClientIndividualDetail>
  getIndividualClients(req: IGetClientsReq<IClientIndividualsFilter>): Promise<IClientPagination<IClientIndividualListItem>>
}

export class ClientDataFacade implements IClientDataFacade {
  constructor(
    private actions$: Actions,
    private store: Store,
  ) {
  }

  getIndividualClient(id: string): Promise<IClientIndividualDetail> {
    const requestId = crypto.randomUUID();
    this.store.dispatch(ClientsActions.getIndividualClient.req({id: id }))

    return firstValueFrom(
      this.actions$.pipe(
        ofType(ClientsActions.getIndividualClient.success, ClientsActions.getIndividualClient.failure),
        take(1),
        map((action: any) => {
          if (action.type === ClientsActions.getIndividualClient.success.type) {
            return action.client;
          }
          throw  action.error;
        })
      )
    );
  }

  getIndividualClients(req: IGetClientsReq<IClientIndividualsFilter>): Promise<IClientPagination<IClientIndividualListItem>> {
    this.store.dispatch(ClientsActions.getIndividualClients.req({req: req }))

    return firstValueFrom(
      this.actions$.pipe(
        ofType(ClientsActions.getIndividualClients.success, ClientsActions.getIndividualClients.failure),
        take(1),
        map((action: any) => {
          if (action.type ===ClientsActions.getIndividualClients.success.type) {
            return action.clientsRes;
          }
          throw  action.error;
        })
      )
    );
  }
}
