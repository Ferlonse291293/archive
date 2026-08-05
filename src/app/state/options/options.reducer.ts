import { createReducer, on } from '@ngrx/store';
import {OptionsActions} from './options.actions';
import {initialOptionsState} from './options.state';
export const optionsReducer = createReducer(
  initialOptionsState,
  // Get Options
  on(OptionsActions.getOptionsActions.req, (state) => state),
  on(OptionsActions.getOptionsActions.success, (state, action) => ({
    ...state,
    departments: action.options?.options?.departments ?? []
  })),
  on(OptionsActions.getOptionsActions.failure, (state) => state),
);
