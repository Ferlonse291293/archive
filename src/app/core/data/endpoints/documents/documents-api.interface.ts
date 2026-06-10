// export interface IDocumentTree extends  ITreeElements{
//   content: IFolderDocument | IDocumentRef
//   children: IDocumentTree[] | null;
// }

export type IDocumentTree = FolderNode | DocumentNode;

export interface IDocumentRef {
  type: 'DOCUMENT';
  "id": string,
  "folderId": string,
  "version": number,
  "name": string,
  "dateCreated": number,
  "dateUpdate": number
}

export interface IFolderDocument {
  type: 'FOLDER';
  "id": string,
  "name": string,
  "parentFolderId": string

}

type TreeElementsType = 'DOCUMENT' | 'FOLDER';

export interface BaseTreeNode {
  id: string;
  name: string;
  type: TreeElementsType;
  parentId: string | 'root';
}

export interface FolderNode extends BaseTreeNode {
  type: 'FOLDER';
  content: IFolderDocument;
  children: IDocumentTree[];
}

export interface DocumentNode extends BaseTreeNode {
  type: 'DOCUMENT';
  content: IDocumentRef;
  children: IDocumentTree[];
}









export interface IDocument {
  "documentId": string,
  "clientId": string,
  "title": string,
  "type": string,
  "status": string[],
  "createdAt": number,
  "updatedAt": number,
  "metadata": {
    "version": number,
    "language": string,
    "confidential": boolean
  },
  "files": IFileReference[]
}


export interface IFileReference {
  fileId: string;
  fileName: string;
  mineType: string;
}

export interface ITreeElements{
  "id": "string",
  "parentId": "string | 'root'",
  "name": "string",
  "children": ITreeElements[] | null
}
