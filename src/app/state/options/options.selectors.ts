import {createFeatureSelector, createSelector} from '@ngrx/store';
import {OptionsState} from './options.state';

export const selectOptionsState =  createFeatureSelector<OptionsState>('options')

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
