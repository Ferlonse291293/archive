import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SettingsState} from './settings.state';

export const selectSettingsState = createFeatureSelector<SettingsState>('settings')

export const currentLanguage = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.language
);
