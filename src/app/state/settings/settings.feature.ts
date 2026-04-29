import { provideState } from '@ngrx/store';

import {settingsReducer} from './settings.reducer';


export const settingsFeature = [
  provideState('settings', settingsReducer),
  // provideEffects(ClientsEffects)
];
