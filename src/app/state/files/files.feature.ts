import { provideState } from '@ngrx/store';

import {filesReducer} from './files.reducer';
import {provideEffects} from '@ngrx/effects';
import {FilesEffects} from './files.effects';
import {FEATURE_NAMES} from '../feature-names';


export const filesFeature = [
  provideState(FEATURE_NAMES.FILES, filesReducer),
   provideEffects(FilesEffects)
];
