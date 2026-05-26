import { provideState } from '@ngrx/store';

import {authReducer} from './auth.reducer';
import {provideEffects} from '@ngrx/effects';
import {AuthEffects} from './auth.effects';


export const authFeature = [
  provideState('auth', authReducer),
   provideEffects(AuthEffects)
];
