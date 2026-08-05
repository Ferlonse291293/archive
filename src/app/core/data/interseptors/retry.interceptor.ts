import {API_CONFIG} from '../api/api.config';
import {retry, throwError, timer} from 'rxjs';
import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {NO_AUTH} from '../utils/http-context.tokens';


export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(NO_AUTH)) {
    return next(req);
  }

  return next(req).pipe(
    retry({
      count: API_CONFIG.retryCount,
      delay: (error: HttpErrorResponse, retryCount: number) => {
        if (error.status === 401 || error.status === 403) {
          return throwError(() => error); // не ретраим auth-ошибки
        }
        return timer(API_CONFIG.retryDelay);
      }
    })
  );
};
