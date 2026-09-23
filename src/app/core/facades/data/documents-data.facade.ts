import {Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {firstValueFrom, map, take} from 'rxjs';
import {IDocument, IDocumentDto, IDocumentTree} from '../../data/endpoints/documents/documents-api.interface';
import {DocumentsActions} from '../../../state/documents/documents.actions';


export interface IDocumentsDataFacade {
  getDocumentsTree(clientId: string): Promise<IDocumentTree>
  getDocument(documentId: string): Promise<IDocumentDto>
}

export class DocumentsDataFacade implements IDocumentsDataFacade {
  constructor(
    private actions$: Actions,
    private store: Store,
  ) {
  }

  getDocumentsTree(clientId: string): Promise<IDocumentTree> {
    const requestId = crypto.randomUUID();
    this.store.dispatch(DocumentsActions.getDocumentsTree.req({clientId: clientId}))

    return firstValueFrom(
      this.actions$.pipe(
        ofType(DocumentsActions.getDocumentsTree.success, DocumentsActions.getDocumentsTree.failure),
        take(1),
        map((action: any) => {
          if (action.type === DocumentsActions.getDocumentsTree.success.type) {
            return action.treeDoc;
          }

          throw action.error;
        })
      )
    );
  }

  getDocument(documentId: string): Promise<IDocumentDto> {
    const requestId = crypto.randomUUID();
    this.store.dispatch(DocumentsActions.getDocument.req({documentId: documentId}))

    return firstValueFrom(
      this.actions$.pipe(
        ofType(DocumentsActions.getDocument.success, DocumentsActions.getDocument.failure),
        take(1),
        map((action: any) => {
          if (action.type === DocumentsActions.getDocument.success.type) {
            return action.document;
          }
          throw action.error;
        })
      )
    );
  }



}
