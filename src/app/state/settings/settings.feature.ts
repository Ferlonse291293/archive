import { provideState } from '@ngrx/store';

import {settingsReducer} from './settings.reducer';
import {FEATURE_NAMES} from '../feature-names';


export const settingsFeature = [
  provideState(FEATURE_NAMES.SETTINGS, settingsReducer),
  // provideEffects(FilesEffects)
];
