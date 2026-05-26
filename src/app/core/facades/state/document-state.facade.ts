import {Store} from '@ngrx/store';
import {IDocumentTree} from '../../data/endpoints/documents/documents-api.interface';
import {firstValueFrom, Observable} from 'rxjs';
import {DocumentsSelectors} from '../../../state/documents/documents.selectors';


export interface IDocumentsStateFacade {
  getDocumentsTree$(): Observable<IDocumentTree>
  getDocumentsTree(): Promise<IDocumentTree>
}

export class DocumentStateFacade implements IDocumentsStateFacade{
  constructor(
    private store: Store,
  ) {
  }

  getDocumentsTree$(): Observable<IDocumentTree>{
    return this.store.select(DocumentsSelectors.getTreeDocuments)
  }
  getDocumentsTree(): Promise<IDocumentTree>{
    return  firstValueFrom(this.store.select(DocumentsSelectors.getTreeDocuments))
  }



}
