import {IDocument, IDocumentDto, IDocumentTree} from '../../core/data/endpoints/documents/documents-api.interface';

export interface DocumentsState {
  treeDocuments: IDocumentTree
  currentDocument: IDocumentDto
}

export const initialDocumentsState: DocumentsState = {
  treeDocuments: {} as IDocumentTree,
  currentDocument: {} as IDocumentDto
};



