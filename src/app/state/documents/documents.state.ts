import {IDocumentTree} from '../../core/data/endpoints/documents/documents-api.interface';

export interface DocumentsState {
  treeDocuments: IDocumentTree
}

export const initialDocumentsState: DocumentsState = {
  treeDocuments: {} as IDocumentTree
};



