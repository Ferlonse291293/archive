import { provideState } from '@ngrx/store';

import {optionsReducer} from './options.reducer';
import {provideEffects} from '@ngrx/effects';
import {OptionsEffects} from './options.effects';


export const optionsFeature = [
  provideState('options', optionsReducer),
   provideEffects(OptionsEffects)
];
