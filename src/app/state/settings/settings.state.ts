import {Language} from '../../shared';


export interface SettingsState {
  isOpenSidebar: boolean,
  isMainLoader: boolean,
  language: Language,

}

export const initialClientsState: SettingsState = {
  isOpenSidebar: false,
  isMainLoader: false,
  language: 'en'
};
