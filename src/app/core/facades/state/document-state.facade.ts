import {Store} from '@ngrx/store';
import {IDocument, IDocumentTree} from '../../data/endpoints/documents/documents-api.interface';
import {firstValueFrom, Observable} from 'rxjs';
import {DocumentsSelectors} from '../../../state/documents/documents.selectors';


export interface IDocumentsStateFacade {
  getDocumentsTree$(): Observable<IDocumentTree>
  getDocumentsTree(): Promise<IDocumentTree>
  getDocument$(): Observable<IDocument>
  getDocument(): Promise<IDocument>
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

  getDocument$(): Observable<IDocument>{
    return this.store.select(DocumentsSelectors.getDocument)
  }
  getDocument(): Promise<IDocument>{
    return  firstValueFrom(this.store.select(DocumentsSelectors.getDocument))
  }



}
