

import {provideStore} from '@ngrx/store';
import { provideEffects} from '@ngrx/effects';
import {provideStoreDevtools,} from '@ngrx/store-devtools';

import {settingsFeature} from './settings/settings.feature';
import {authFeature} from './auth/auth.feature';



export const stateProvider = [
  provideStore({}),
  provideEffects([]),

  ...settingsFeature,
  ...authFeature,

  provideStoreDevtools({
    maxAge: 25,
    logOnly: typeof window === 'undefined'
  })
];
