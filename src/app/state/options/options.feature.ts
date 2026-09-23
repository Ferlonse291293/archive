import { provideState } from '@ngrx/store';

import {optionsReducer} from './options.reducer';
import {provideEffects} from '@ngrx/effects';
import {OptionsEffects} from './options.effects';
import {FEATURE_NAMES} from '../feature-names';


export const optionsFeature = [
  provideState(FEATURE_NAMES.OPTIONS, optionsReducer),
   provideEffects(OptionsEffects)
];
