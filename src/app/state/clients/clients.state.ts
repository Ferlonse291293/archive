

import {IClient, IGetClientsReq} from '../../core/data/endpoints/clients/clients-api.interface';



export interface ClientsState {
  lastRequest: IGetClientsReq,
  currentClient: IClient

}

export const initialClientsState: ClientsState = {
  lastRequest: {} as IGetClientsReq,
  currentClient: {} as IClient
};



