import {createFeatureSelector, createSelector} from '@ngrx/store';
import {OptionsState} from './options.state';
import {FEATURE_NAMES} from '../feature-names';

export const selectOptionsState =  createFeatureSelector<OptionsState>(FEATURE_NAMES.OPTIONS)

export const getAllOptions = createSelector(
  selectOptionsState,
  (state: OptionsState) => ({ ...state })
);

export const getDepartmentsOptions = createSelector(
  selectOptionsState,
  (state: OptionsState) => state.departments
);


export const OptionsSelectors = {
  getAllOptions,
  getDepartmentsOptions
};
