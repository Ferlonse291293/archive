import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SettingsState} from './settings.state';
import {FEATURE_NAMES} from '../feature-names';

export const selectSettingsState = createFeatureSelector<SettingsState>(FEATURE_NAMES.SETTINGS)

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
