import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {DocumentsActions} from './documents.actions';
import {catchError, map, of, switchMap} from 'rxjs';
import {DocumentsApi} from '../../core/data/endpoints/documents/documents-api';



@Injectable()
export class DocumentsEffects {
  private actions$ = inject(Actions);
  private documentsApi = inject(DocumentsApi);

  getTreeDocuments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentsActions.getDocumentsTree.req),
      switchMap((action) =>
        this.documentsApi.getDocumentsTree(action.clientId).pipe(
          map(res => {
             return  DocumentsActions.getDocumentsTree.success({treeDoc: res})
          }
          ),
          catchError(error =>
            of(DocumentsActions.getDocumentsTree.failure({ error }))
          )
        )
      )
    )
  );


}
