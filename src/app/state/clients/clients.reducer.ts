// import { createReducer, on } from '@ngrx/store';
// import { clientsAdapter } from './clients.adapter';
// import { initialState } from './clients.state';
// import { ClientsActions } from './clients.actions';
//
// export const clientsReducer = createReducer(
//   initialState,
//
//   on(ClientsActions.loadClients, (state) => ({
//     ...state,
//     isLoading: true
//   })),
//
//   on(ClientsActions.loadClientsSuccess, (state, { clients }) =>
//     clientsAdapter.setAll(clients, {
//       ...state,
//       isLoading: false,
//       error: null
//     })
//   ),
//
//   on(ClientsActions.loadClientsFailure, (state, { error }) => ({
//     ...state,
//     isLoading: false,
//     error
//   }))
// );
