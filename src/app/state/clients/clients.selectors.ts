import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ClientsState} from './clients.state';
import {FEATURE_NAMES} from '../feature-names';

export const selectClientsState = createFeatureSelector<ClientsState>(FEATURE_NAMES.AUTH)

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
