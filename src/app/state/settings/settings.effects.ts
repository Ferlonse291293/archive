// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, switchMap, of } from 'rxjs';
// import { ClientDataService } from '../../../data/services';
// import { DocumentsActions } from './clients.actions';
//
// @Injectable()
// export class DocumentsEffects {
//   constructor(
//     private actions$: Actions,
//     private clientDataService: ClientDataService
//   ) {}
//
//   loadClients$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(DocumentsActions.loadClients),
//       switchMap(() =>
//         this.clientDataService.getClients().pipe(
//           map((clients) =>
//             DocumentsActions.loadClientsSuccess({ clients })
//           ),
//           catchError((error) =>
//             of(DocumentsActions.loadClientsFailure({ error }))
//           )
//         )
//       )
//     )
//   );
// }
