import { createReducer, on } from '@ngrx/store';



import {ClientsActions} from './clients.actions';
import {initialClientsState} from './clients.state';


export const clientsReducer = createReducer(
  initialClientsState,
  // GET CLIENTS
  on(ClientsActions.getIndividualClients.req, (state) => state),
  on(ClientsActions.getIndividualClients.success, (state, action) => ({
    ...state
  })),
  on(ClientsActions.getIndividualClients.failure, (state) => state),

  // GET CLIENT
  on(ClientsActions.getIndividualClient.req, (state) => state),
  on(ClientsActions.getIndividualClient.success, (state, action) => ({
    ...state,
    individuals : {...state.individuals ,  currentClient: action.client }
  })),
  on(ClientsActions.getIndividualClient.failure, (state) => state),
);
