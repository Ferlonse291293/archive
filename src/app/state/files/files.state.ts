import {IFile} from '../../core/data/endpoints/documents/documents-api.interface';


export interface FilesState {
  currentFileUrl: string,
}

export const initialFilesState: FilesState = {
  currentFileUrl: '',
};



