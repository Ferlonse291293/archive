
import {HttpInterceptorFn} from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  return next(
    req.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    })
  );
};
