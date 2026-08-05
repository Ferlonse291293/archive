import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DocumentsState} from './documents.state';


export const selectDocumentsState = createFeatureSelector<DocumentsState>('documents')

export const getTreeDocuments = createSelector(
  selectDocumentsState,
  (state: DocumentsState) => state.treeDocuments
);

export const getDocument = createSelector(
  selectDocumentsState,
  (state: DocumentsState) => state.currentDocument
);

export const DocumentsSelectors = {
  getTreeDocuments,
  getDocument
};


