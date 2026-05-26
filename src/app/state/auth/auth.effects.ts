import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthApi} from '../../core/data/endpoints/auth.api';
import {AuthActions} from './auth.actions';
import {catchError, map, of, switchMap} from 'rxjs';
import {SecurityService} from '../../core/services/security.service';



@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authApi = inject(AuthApi);
  private securityService = inject(SecurityService);



  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login.req),
      switchMap((action) =>
        this.authApi.login(action.req).pipe(
          map(res => {
              this.securityService.setCsrfToken(res.csrfToken)
             return  AuthActions.login.success()
          }
          ),
          catchError(error =>
            of(AuthActions.login.failure({ error }))
          )
        )
      )
    )
  );

  profile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.profile.req),
      switchMap((action) =>
        this.authApi.profile().pipe(
          map(res => {
              this.securityService.setPermissions(res.permissions)
              this.securityService.setRole(res.role)
              return  AuthActions.profile.success({user: res})
            }
          ),
          catchError(error =>
            of(AuthActions.profile.failure({ error }))
          )
        )
      )
    )
  );
}
