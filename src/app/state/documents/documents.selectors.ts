import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DocumentsState} from './documents.state';
import {FEATURE_NAMES} from '../feature-names';


export const selectDocumentsState = createFeatureSelector<DocumentsState>(FEATURE_NAMES.DOCUMENT)

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


