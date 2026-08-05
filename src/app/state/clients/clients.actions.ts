import {createActionGroup,props} from '@ngrx/store';
import {
  IClientIndividualDetail,
  IClientIndividualListItem,
  IClientIndividualsFilter,
  IClientPagination,
  IGetClientsReq,
} from '../../core/data/endpoints/clients/clients-api.interface';

//////// LOADING
export const getIndividualClients = createActionGroup({
  source: 'CLIENTS GET INDIVIDUAL CLIENTS',
  events: {
     req : props<{ req: IGetClientsReq<IClientIndividualsFilter>}>(),
     success :  props<{ clientsRes:  IClientPagination<IClientIndividualListItem> }>(),
     failure: props<{ error: string }>(),
  }
},
);

export const getIndividualClient = createActionGroup({
    source: 'CLIENTS GET INDIVIDUAL CLIENT',
    events: {
      req : props<{ id: string }>(),
      success :  props<{ client: IClientIndividualDetail }>(),
      failure: props<{ error: string }>(),
    }
  },
);

export const ClientsActions = {
  getIndividualClients,
  getIndividualClient
};
