import { provideState } from '@ngrx/store';

import {clientsReducer} from './clients.reducer';
import {provideEffects} from '@ngrx/effects';
import {ClientsEffects} from './clients.effects';
import {FEATURE_NAMES} from '../feature-names';


export const clientsFeature = [
  provideState(FEATURE_NAMES.AUTH, clientsReducer),
   provideEffects(ClientsEffects)
];
