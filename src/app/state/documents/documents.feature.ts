import { provideState } from '@ngrx/store';

import {documentsReducer} from './documents.reducer';
import {provideEffects} from '@ngrx/effects';
import {DocumentsEffects} from './documents.effects';
import {FEATURE_NAMES} from '../feature-names';


export const documentsFeature = [
  provideState(FEATURE_NAMES.DOCUMENT, documentsReducer),
   provideEffects(DocumentsEffects)
];
