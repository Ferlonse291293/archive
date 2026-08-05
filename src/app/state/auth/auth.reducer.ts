import { createReducer, on } from '@ngrx/store';



import {AuthActions} from './auth.actions';
import {initialClientsState} from './auth.state';
import {IUser} from '../../shared/models/interfaces/user.interface';


export const authReducer = createReducer(
  initialClientsState,
  // Login
  on(AuthActions.login.req, (state) => state),
  on(AuthActions.login.success, (state, action) => ({
    ...state
  })),
  on(AuthActions.login.failure, (state) => state),

  // Profile
  on(AuthActions.profile.req, (state) => state),
  on(AuthActions.profile.success, (state, action) => ({
    ...state,
    user: action.user
  })),
  on(AuthActions.profile.failure, (state) => state),

  // Refresh
  on(AuthActions.refreshToken.req, (state, v) => ({
    ...state,
    isLoading: v
  })),
  on(AuthActions.refreshToken.success, (state) => state),
  on(AuthActions.refreshToken.failure, (state) => state),

// Logout
  on(AuthActions.logout.req, (state) => state),
  on(AuthActions.logout.success, (state) => state),
  on(AuthActions.logout.failure, (state) => state)



);
