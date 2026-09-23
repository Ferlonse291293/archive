import { createReducer, on } from '@ngrx/store';



import {FilesActions} from './files.actions';
import {initialFilesState} from './files.state';



export const filesReducer = createReducer(
  initialFilesState,
  // GET DOCUMENTS TREE
  on(FilesActions.getFileUrlById.req, (state) => state),
  on(FilesActions.getFileUrlById.success, (state, action) => ({
    ...state, currentFileUrl: action.url
  })),
  on(FilesActions.getFileUrlById.failure, (state) => state),





);
