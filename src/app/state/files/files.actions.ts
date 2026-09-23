import {createActionGroup,props} from '@ngrx/store';
import {IFile} from '../../core/data/endpoints/documents/documents-api.interface';


export const getFileUrlById = createActionGroup({
  source: 'FILES_GET_FILE_URL_BY_ID',
  events: {
     req : props<{ fileId: string }>(),
     success :  props<{ url:  string}>(),
     failure: props<{ error: string }>(),
  }
},
);



export const FilesActions = {
  getFileUrlById,
};
