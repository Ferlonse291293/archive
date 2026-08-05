import { createReducer, on } from '@ngrx/store';



import {DocumentsActions} from './documents.actions';
import {initialDocumentsState} from './documents.state';



export const documentsReducer = createReducer(
  initialDocumentsState,
  // GET DOCUMENTS TREE
  on(DocumentsActions.getDocumentsTree.req, (state) => state),
  on(DocumentsActions.getDocumentsTree.success, (state, action) => ({
    ...state, treeDocuments: action.treeDoc
  })),
  on(DocumentsActions.getDocumentsTree.failure, (state) => state),

  // GET DOCUMENT
  on(DocumentsActions.getDocument.req, (state) => state),
  on(DocumentsActions.getDocument.success, (state, action) => ({
    ...state, document: action.document
  })),
  on(DocumentsActions.getDocument.failure, (state) => state),




);
