import { createReducer, on } from '@ngrx/store';



import {ClientsActions} from './clients.actions';
import {initialClientsState} from './clients.state';


export const clientsReducer = createReducer(
  initialClientsState,
  // GET CLIENTS
  on(ClientsActions.getClients.req, (state) => state),
  on(ClientsActions.getClients.success, (state, action) => ({
    ...state
  })),
  on(ClientsActions.getClients.failure, (state) => state),

  // GET CLIENT
  on(ClientsActions.getClient.req, (state) => state),
  on(ClientsActions.getClient.success, (state, action) => ({
    ...state,
    currentClient: action.client
  })),
  on(ClientsActions.getClient.failure, (state) => state),




);
