
import {TokenService} from '../services/token.service';
import {NO_AUTH} from '../utils/http-context.tokens';
import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.get();

  if (!token || req.context.get(NO_AUTH)) {
    return next(req);
  }

  return next(
    req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  );
};
