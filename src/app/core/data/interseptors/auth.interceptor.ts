import {NO_AUTH} from '../utils/http-context.tokens';
import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {SecurityService} from '../../services/security.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
   const securityService = inject(SecurityService);


  if (!securityService.getCsrfToken() || req.context.get(NO_AUTH)) {
    return next(req);
  }

  return next(
    req.clone({
      setHeaders: {
        'x-csrf-token': securityService.getCsrfToken()
      }
    })
  );
};
