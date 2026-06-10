import { provideState } from '@ngrx/store';

import {documentsReducer} from './documents.reducer';
import {provideEffects} from '@ngrx/effects';
import {DocumentsEffects} from './documents.effects';


export const documentsFeature = [
  provideState('documents', documentsReducer),
   provideEffects(DocumentsEffects)
];
