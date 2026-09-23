import {IMetadataDto} from '../../data/endpoints/documents/documents-api.interface';

export interface IDocMetadata {
  init(meta: IMetadataDto)
  clear(): void
}

export class DocMetadata {
  init(meta: IMetadataDto){

  }

  clear(){

  }
}
