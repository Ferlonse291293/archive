import { createReducer, on } from '@ngrx/store';



import {changeLanguageActions, onMainLoadingActions} from './settings.actions';
import {initialClientsState} from './settings.state';
import {Language} from '../../shared';

export const settingsReducer = createReducer(
  initialClientsState,

  on(onMainLoadingActions.start, (state, v) => ({
    ...state,
    isLoading: v
  })),
  on(onMainLoadingActions.success, (state) => state),
  on(onMainLoadingActions.failure, (state) => state),

  on(changeLanguageActions.change, (state , {lang}) => ({
    ...state,
    language: lang
  })),
  on(changeLanguageActions.success, (state) => state),
  on(changeLanguageActions.failure, (state) => state),





);
