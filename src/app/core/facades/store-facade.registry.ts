import {AuthDataFacade} from './data/auth-data-facade';
import {AuthStateFacade} from './state/auth-state-facade';
import {ClientDataFacade} from './data/client-data-facade';
import {ClientStateFacade} from './state/client-state-facade';
import {DocumentsDataFacade} from './data/documents-data.facade';
import {DocumentStateFacade} from './state/document-state.facade';
import {OptionsDataFacade} from './data/options-data-facade';
import {OptionsStateFacade} from './state/options-state-facade';


export const storeFacadeKeys = {
  AUTH: 'AUTH',
  CLIENTS: 'CLIENTS',
  DOCUMENTS: 'DOCUMENTS',
  OPTIONS: 'OPTIONS'
} as const;

export type StoreFacadeKey = keyof typeof storeFacadeKeys;

export type DataFacadeMap = {
  AUTH?: AuthDataFacade;
  CLIENTS?: ClientDataFacade
  DOCUMENTS?: DocumentsDataFacade
  OPTIONS?: OptionsDataFacade
};

export type StateFacadeMap = {
  AUTH?: AuthStateFacade;
  CLIENTS?: ClientStateFacade
  DOCUMENTS?: DocumentStateFacade
  OPTIONS?: OptionsStateFacade
};
