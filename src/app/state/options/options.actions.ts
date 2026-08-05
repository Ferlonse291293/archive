// documents.actions.ts
import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {IOptionResponse} from '../../core/data/endpoints/options/options-api.interface';

//////// LOADING
export const getOptionsActions = createActionGroup({
  source: 'OPTIONS',
  events: {
     req : emptyProps(),
     success: props<{ options: IOptionResponse }>(),
     failure: props<{ error: boolean }>(),
  }
},);






export const OptionsActions = {
  getOptionsActions,
};


