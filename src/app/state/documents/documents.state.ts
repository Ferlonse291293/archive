import {IDocument, IDocumentTree} from '../../core/data/endpoints/documents/documents-api.interface';

export interface DocumentsState {
  treeDocuments: IDocumentTree
  currentDocument: IDocument
}

export const initialDocumentsState: DocumentsState = {
  treeDocuments: {} as IDocumentTree,
  currentDocument: {} as IDocument
};



