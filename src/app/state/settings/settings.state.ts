import {Language} from '../../shared';


export interface SettingsState {
  isMainLoader: boolean,
  language: Language
}

export const initialClientsState: SettingsState = {
  isMainLoader: false,
  language: 'en'
};
