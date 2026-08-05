
import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {TokenService} from '../services/token.service';
import {catchError, switchMap, take, throwError} from 'rxjs';
import {inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthActions} from '../../../state/auth/auth.actions';
import {Actions, ofType} from '@ngrx/effects';
import {NO_AUTH} from '../utils/http-context.tokens';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);
  const actions$ = inject(Actions);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401 || req.context.get(NO_AUTH)) {
        return throwError(() => error);
      }

      store.dispatch(AuthActions.refreshToken.req());

      return actions$.pipe(
        ofType(AuthActions.refreshToken.success, AuthActions.refreshToken.failure),
        take(1),
        switchMap((action) => {
          if (action.type === AuthActions.refreshToken.failure.type) {
            store.dispatch(AuthActions.logout.req());
            return throwError(() => error);
          }
          return next(req);
        })
      );
    })
  );
};
