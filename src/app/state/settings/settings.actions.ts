// settings.actions.ts
import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Language} from '../../shared';

//////// LOADING
export const onMainLoadingActions = createActionGroup({
  source: 'MAIN LOADING',
  events: {
     start : props<{ start: boolean }>(),
     success:  emptyProps(),
     failure: props<{ error: boolean }>(),
  }
},);

//////// LANGUAGE

export const changeLanguageActions = createActionGroup({
  source: 'MAIN LANGUAGE',
  events: {
    change : props<{ lang: Language }>(),
    success:  emptyProps(),
    failure: props<{ error: boolean }>(),
  }
},);
