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
  id: string;
  name: string;
  parentFolderId?: string;
  parent?: IFolderDocument;
  children: IFolderDocument[];
  documentGroups: IDocumentGroup[];
}

export interface IDocumentGroup {
  id: string;
  clientId: string;
  folderId: string;
  title: string;
  versions: IDocument[];
  currentVersion?: IDocument;
}

type TreeElementsType = "ITEM" | "FOLDER";

export interface BaseTreeNode {
  id: string;
  name: string;
  type: TreeElementsType;
  parentId: string | 'root';
  children: any[]
}

export interface FolderNode extends BaseTreeNode {
  type: 'FOLDER';
  content: IFolderDocument;
  children: IDocumentTree[];
}

export interface DocumentNode extends BaseTreeNode {
  type: "ITEM";
  content: IDocumentRef;
  children: IDocumentTree[];
}

export interface IDocument {
  id: string;
  groupId: string;
  createdAt: Date;
  updatedAt: Date;
  metadata: IMetadata;
  files:   IFile[];
  group: IDocumentGroup;
}

export interface IMetadata {
  id: string;
  version: number;
  language: string;
  confidential: boolean;
  documentType: string;
  issueDate?: Date;
  expiryDate?: Date;
  issuingAuthority?: string;
  verificationStatus: VerificationStatus;
}

export interface IFile {
  id: string;
  documentId?: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  storagePath: string;
  checksum: string;
  uploadedAt: Date;
}

export enum VerificationStatus {
  Pending = "PENDING",
  Verified = "VERIFIED",
  Rejected = "REJECTED",
}

export interface ITreeElements{
  "id": "string",
  "parentId": "string | 'root'",
  "name": "string",
  "children": ITreeElements[] | null
}

export interface  IDocumentVersionDto {
  documentId: string;
  version: number;
  name: string;
}

export interface  IMetadataDto extends IMetadata{
  createdAt: Date;
}

export interface  IDocumentDto {
  id: string;
  metadata: IMetadataDto;
  versions: IDocumentVersionDto[];
  files: IFile[]
}
