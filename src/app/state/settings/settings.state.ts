import {Language} from '../../shared';


export interface SettingsState {
  isOpenSidebar: boolean,
  isMainLoader: boolean,
  isDisableSidebar: boolean,
  language: Language,

}

export const initialClientsState: SettingsState = {
  isOpenSidebar: false,
  isDisableSidebar: false,
  isMainLoader: false,
  language: 'en'
};
