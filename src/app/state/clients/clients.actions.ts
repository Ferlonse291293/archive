import {createActionGroup,props} from '@ngrx/store';
import {IClient, IGetClientsReq, IGetClientsRes} from '../../core/data/endpoints/clients/clients-api.interface';

//////// LOADING
export const getClients = createActionGroup({
  source: 'CLIENTS GET CLIENTS',
  events: {
     req : props<{ req: IGetClientsReq }>(),
     success :  props<{ clientsRes:  IGetClientsRes }>(),
     failure: props<{ error: string }>(),
  }
},
);

export const getClient = createActionGroup({
    source: 'CLIENTS GET CLIENT',
    events: {
      req : props<{ id: string }>(),
      success :  props<{ client: IClient }>(),
      failure: props<{ error: string }>(),
    }
  },
);

export const ClientsActions = {
  getClients,
  getClient
};
