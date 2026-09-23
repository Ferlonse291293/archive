import {IDocumentDto} from '../../data/endpoints/documents/documents-api.interface';
import {DocVersions, IDocVersions} from './doc-versions';
import {FileManager, IFileManager} from './file-manager';
import {DocMetadata, IDocMetadata} from './doc-metadata';


export interface IDocumentControllerConf {
  create: boolean;
  update: boolean;
  uploadFiles: boolean;
}

export interface IDocumentController{
  init(document: IDocumentDto): void
  update(document: IDocumentDto): void
  versions: IDocVersions
  fileManager: IFileManager
  docMetadata: IDocMetadata
  clear(): void
}

export class DocumentController implements IDocumentController{
 private _versions : IDocVersions
 private _fileManager: IFileManager
 private _docMetadata: IDocMetadata
  private _config: IDocumentControllerConf
  constructor(conf: IDocumentControllerConf) {
    this._config = conf
    this._versions =  new DocVersions()
    this._fileManager =  new FileManager()
    this._docMetadata =  new DocMetadata()
  }

  init(document: IDocumentDto): void{
   this._docMetadata.init(document.metadata)
   this._fileManager.init(document.files)
   this._versions.init(document.versions)
  }
  update(document: IDocumentDto){
    this.clear()
    this.init(document)
  }
  get versions(): IDocVersions {
     return this._versions
   }
  get fileManager(): IFileManager{
    return this._fileManager
  }
  get docMetadata(): IDocMetadata{
    return this._docMetadata
  }

    clear(): void{
    this._docMetadata.clear()
    this._fileManager.clear()
    this._versions.clear()

  }

}
