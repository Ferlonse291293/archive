import {AuthDataFacade} from './data/auth-data-facade';
import {AuthStateFacade} from './state/auth-state-facade';


export const storeFacadeKeys = {
  AUTH: 'AUTH',
  CLIENTS: 'CLIENTS',
} as const;

export type StoreFacadeKey = keyof typeof storeFacadeKeys;

export type DataFacadeMap = {
  AUTH: AuthDataFacade;
};

export type StateFacadeMap = {
  AUTH: AuthStateFacade;
};
