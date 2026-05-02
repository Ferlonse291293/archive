// settings.actions.ts
import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Language} from '../../shared';

//////// LOADING
export const onMainLoadingActions = createActionGroup({
  source: 'SETTINGS LOADING',
  events: {
     start : props<{ start: boolean }>(),
     success:  emptyProps(),
     failure: props<{ error: boolean }>(),
  }
},);

//////// LANGUAGE

export const changeLanguageActions = createActionGroup({
  source: 'SETTINGS LANGUAGE',
  events: {
    change : props<{ lang: Language }>(),
    success:  emptyProps(),
    failure: props<{ error: boolean }>(),
  }
},);

export const toggleSidebarActions = createActionGroup({
  source: 'SETTINGS SIDEBAR',
  events: {
    toggle : emptyProps(),
  }
},);

