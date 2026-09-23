import {createFeatureSelector} from '@ngrx/store';
import {FilesState} from './files.state';
import {FEATURE_NAMES} from '../feature-names';



export const selectDocumentsState = createFeatureSelector<FilesState>(FEATURE_NAMES.DOCUMENT)

// export const getTreeDocuments = createSelector(
//   selectDocumentsState,
//   (state: FilesState) => state.currentFileId
// );
//
// export const getDocument = createSelector(
//   selectDocumentsState,
//   (state: FilesState) => state.currentDocument
// );
//
// export const FilesSelectors = {
//   getTreeDocuments,
//   getDocument
// };


