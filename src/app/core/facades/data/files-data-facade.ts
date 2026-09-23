import {IFile} from '../../data/endpoints/documents/documents-api.interface';
import {FilesActions} from '../../../state/files/files.actions';
import {Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {firstValueFrom, map, take} from 'rxjs';


export interface IFilesDataFacade {
  getFileUrlById(fileId: string): Promise<string>

}

export class FilesDataFacade implements IFilesDataFacade {
  constructor(
    private actions$: Actions,
    private store: Store,
  ) {
  }

  getFileUrlById(fileId: string): Promise<string> {
    this.store.dispatch(FilesActions.getFileUrlById.req({fileId: fileId}))
    return firstValueFrom(
      this.actions$.pipe(
        ofType(FilesActions.getFileUrlById.success, FilesActions.getFileUrlById.failure),
        take(1),
        map((action: any) => {
          if (action.type === FilesActions.getFileUrlById.success.type) {
            return action.url;
          }
          throw action.error;
        })
      )
    );
  }
}
