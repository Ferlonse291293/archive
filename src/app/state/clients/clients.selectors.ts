import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ClientsState} from './clients.state';

export const selectClientsState = createFeatureSelector<ClientsState>('clients')

export const lastIndividualRequest = createSelector(
  selectClientsState,
  (state: ClientsState) => state.individuals.lastRequest
);
//


export const currentIndividualClient = createSelector(
  selectClientsState,
  (state: ClientsState) => state.individuals.currentClient
);



export const ClientsSelectors = {
  lastIndividualRequest,
  currentIndividualClient
};
