// documents.actions.ts
import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Language} from '../../shared';
import {login, profile, refreshToken} from '../auth/auth.actions';

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
  source: 'SETTINGS SIDEBAR TOGGLE',
  events: {
    toggle : emptyProps(),
  }
},
  );

export const changeSidebarActions = createActionGroup({
    source: 'SETTINGS SIDEBAR CHANGE IS OPEN',
    events: {
     change : props<{ v: boolean }>(),
    }
  },
);

export const changeDisableSidebarActions = createActionGroup({
    source: 'SETTINGS SIDEBAR TOGGLE DISABLE',
    events: {
      change : props<{ v: boolean }>(),
    }
  },
);


export const settingsActions = {
  onMainLoadingActions,
  changeLanguageActions,
  toggleSidebarActions,
  changeSidebarActions,
  changeDisableSidebarActions
};


