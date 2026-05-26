import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ClientsState} from './clients.state';
import {user} from '../auth/auth.selectors';

export const selectClientsState = createFeatureSelector<ClientsState>('clients')

export const lastRequest = createSelector(
  selectClientsState,
  (state: ClientsState) => state.lastRequest
);
//


export const currentClient = createSelector(
  selectClientsState,
  (state: ClientsState) => state.currentClient
);



export const ClientsSelectors = {
  currentClient,
  lastRequest
};
