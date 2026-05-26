import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const user = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);
//

export const AuthSelectors = {
  user,

};
