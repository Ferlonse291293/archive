import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {FilesActions} from './files.actions';
import {catchError, map, of, switchMap} from 'rxjs';
import {FilesApi} from '../../core/data/endpoints/files/files-api';



@Injectable()
export class FilesEffects {
  private actions$ = inject(Actions);
  private filesApi = inject(FilesApi);

 getFileById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilesActions.getFileUrlById.req),
      switchMap((action) =>
        this.filesApi.getFileById(action.fileId).pipe(
          map(res => {
             return  FilesActions.getFileUrlById.success({url: res.url})
          }
          ),
          catchError(error =>
            of(FilesActions.getFileUrlById.failure({ error }))
          )
        )
      )
    )
  );
}
