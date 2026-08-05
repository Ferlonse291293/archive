
import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Language} from '../../shared';
import {ReqLogin} from '../../core/data/endpoints/auth/auth-api.interface';
import {IUser} from '../../shared/models/interfaces/user.interface';

//////// LOADING
export const login = createActionGroup({
  source: 'AUTH LOGIN',
  events: {
     req : props<{ req: ReqLogin }>(),
     success :  emptyProps(),
     failure: props<{ error: string }>(),
  }
},);

//////// LANGUAGE

export const profile = createActionGroup({
  source: 'AUTH PROFILE',
  events: {
    req :  emptyProps(),
    success: props<{ user: IUser}>(),
    failure: props<{ error:string }>(),
  }
});

export const refreshToken = createActionGroup({
    source: 'AUTH REFRESH TOKEN',
    events: {
      req :  emptyProps(),
      success: emptyProps(),
      failure: props<{ error:string }>(),
    }
  },
);

export const logout = createActionGroup({
    source: 'AUTH LOGOUT',
    events: {
      req :  emptyProps(),
      success: emptyProps(),
      failure: props<{ error:string }>(),
    }
  },
);

export const AuthActions = {
  login,
  profile,
  refreshToken,
  logout
};
