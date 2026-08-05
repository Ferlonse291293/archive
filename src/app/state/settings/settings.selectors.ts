import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SettingsState} from './settings.state';

export const selectSettingsState = createFeatureSelector<SettingsState>('settings')

export const currentLanguage = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.language
);
export const isOpenSidebar = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.isOpenSidebar
);

export const isDisableSidebar = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.isDisableSidebar
);


export const SettingSelectors = {
  isDisableSidebar,
  isOpenSidebar,
  currentLanguage
};
