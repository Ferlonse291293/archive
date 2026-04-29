// import { createFeatureSelector } from '@ngrx/store';
// import { clientsAdapter } from './clients.adapter';
// import { ClientsState } from './clients.state';
// import { eArchiveStoreFeatureNames } from '../../../shared/constant';
//
// export const selectClientsState =
//   createFeatureSelector<ClientsState>(
//     eArchiveStoreFeatureNames.clients
//   );
//
// const {
//   selectAll,
//   selectEntities,
//   selectIds,
//   selectTotal
// } = clientsAdapter.getSelectors(selectClientsState);
//
// export const selectAllClients = selectAll;
// export const selectClientEntities = selectEntities;
// export const selectClientIds = selectIds;
// export const selectClientTotal = selectTotal;
//
// export const selectSelectedClientId = (s: ClientsState) =>
//   s.selectedClientId;
//
// export const selectCurrentClient = (state: any) => {
//   const entities = selectClientEntities(state);
//   const id = selectSelectedClientId(state.clients);
//   return id ? entities[id] : null;
// };
