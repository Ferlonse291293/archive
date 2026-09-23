import {Store} from '@ngrx/store';

interface IFilesStateFacade {
}

export class FilesStateFacade implements IFilesStateFacade {
  constructor(
    private store: Store,
  ){
  }
}
