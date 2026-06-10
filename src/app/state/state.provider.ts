

import {provideStore} from '@ngrx/store';
import { provideEffects} from '@ngrx/effects';
import {provideStoreDevtools,} from '@ngrx/store-devtools';

import {settingsFeature} from './settings/settings.feature';
import {authFeature} from './auth/auth.feature';
import {clientsFeature} from './clients/clients.feature';
import {documentsFeature} from './documents/documents.feature';



export const stateProvider = [
  provideStore({}),
  provideEffects([]),

  ...settingsFeature,
  ...authFeature,
  ...clientsFeature,
  ...documentsFeature,

  provideStoreDevtools({
    maxAge: 25,
    logOnly: typeof window === 'undefined'
  })
];
