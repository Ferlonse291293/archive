import { provideState } from '@ngrx/store';

import {clientsReducer} from './clients.reducer';
import {provideEffects} from '@ngrx/effects';
import {ClientsEffects} from './clients.effects';


export const clientsFeature = [
  provideState('clients', clientsReducer),
   provideEffects(ClientsEffects)
];
