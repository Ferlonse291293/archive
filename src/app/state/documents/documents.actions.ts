import {createActionGroup,props} from '@ngrx/store';
import {IDocument, IDocumentDto, IDocumentTree} from '../../core/data/endpoints/documents/documents-api.interface';


export const getDocumentsTree = createActionGroup({
  source: 'DOCUMENTS_TREE_DOCUMENTS',
  events: {
     req : props<{ clientId: string }>(),
     success :  props<{ treeDoc:  IDocumentTree }>(),
     failure: props<{ error: string }>(),
  }
},
);

export const getDocument = createActionGroup({
    source: 'DOCUMENTS_GET_DOCUMENT',
    events: {
      req : props<{ documentId: string }>(),
      success :  props<{ document:  IDocumentDto }>(),
      failure: props<{ error: string }>(),
    }
  },
);


export const DocumentsActions = {
  getDocumentsTree,
  getDocument,
};
