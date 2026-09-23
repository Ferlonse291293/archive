import {IFile} from '../../data/endpoints/documents/documents-api.interface';
import {Signal, signal} from '@angular/core';

export interface IFileManager{
  init(files: IFile[])
  files:  Signal<IFile[]>
  getFileUrl(fileId: string): string | undefined
  setFileUrl(fileId: string, url: string): void
  checkExistFileUrl(fileId: string): boolean
  clear(): void
}

export class FileManager implements IFileManager{
  private _storeFileUrls = signal<Map<string, string>>(new Map());
  private _files  = signal<IFile[]>([])

  init(files: IFile[]) {
    this._files.set(files)
  }
  get files():  Signal<IFile[]>{
    return this._files
  }
  setFileUrl(fileId: string, url: string): void{
    this._storeFileUrls().set(fileId, url);
  }

  getFileUrl(fileId: string): string | undefined{
   return this._storeFileUrls().get(fileId)
  }

  checkExistFileUrl(fileId: string): boolean{
    return this._storeFileUrls().has(fileId);
  }

  clear(): void{
    this._files.set([])
    this._storeFileUrls().clear()
  }

}
