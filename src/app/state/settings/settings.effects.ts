// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, switchMap, of } from 'rxjs';
// import { ClientDataService } from '../../../data/services';
// import { ClientsActions } from './clients.actions';
//
// @Injectable()
// export class ClientsEffects {
//   constructor(
//     private actions$: Actions,
//     private clientDataService: ClientDataService
//   ) {}
//
//   loadClients$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ClientsActions.loadClients),
//       switchMap(() =>
//         this.clientDataService.getClients().pipe(
//           map((clients) =>
//             ClientsActions.loadClientsSuccess({ clients })
//           ),
//           catchError((error) =>
//             of(ClientsActions.loadClientsFailure({ error }))
//           )
//         )
//       )
//     )
//   );
// }
