import {IDocumentVersionDto} from '../../data/endpoints/documents/documents-api.interface';

export interface IDocVersions{
init(versions: IDocumentVersionDto[])
  clear(): void
}

export class DocVersions {
  init(versions: IDocumentVersionDto[]){

  }

  clear(): void{

  }
}
