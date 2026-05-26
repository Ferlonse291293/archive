import {createActionGroup,props} from '@ngrx/store';
import {IDocumentTree} from '../../core/data/endpoints/documents/documents-api.interface';


export const getDocumentsTree = createActionGroup({
  source: 'DOCUMENTS_TREE_DOCUMENTS',
  events: {
     req : props<{ clientId: string }>(),
     success :  props<{ treeDoc:  IDocumentTree }>(),
     failure: props<{ error: string }>(),
  }
},
);


export const DocumentsActions = {
  getDocumentsTree,
};
