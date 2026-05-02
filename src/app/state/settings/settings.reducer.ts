import { createReducer, on } from '@ngrx/store';



import {changeLanguageActions, onMainLoadingActions, toggleSidebarActions} from './settings.actions';
import {initialClientsState} from './settings.state';


export const settingsReducer = createReducer(
  initialClientsState,
  // Loading
  on(onMainLoadingActions.start, (state, v) => ({
    ...state,
    isLoading: v
  })),
  on(onMainLoadingActions.success, (state) => state),
  on(onMainLoadingActions.failure, (state) => state),

  // Language
  on(changeLanguageActions.change, (state , {lang}) => ({
    ...state,
    language: lang
  })),
  on(changeLanguageActions.success, (state) => state),
  on(changeLanguageActions.failure, (state) => state),

  // Sidebar
  on(toggleSidebarActions.toggle, (state ) => ({
    ...state,
    isOpenSidebar: !state.isOpenSidebar
  })),




);
