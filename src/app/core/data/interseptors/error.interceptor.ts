
import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {TokenService} from '../services/token.service';
import {catchError, throwError} from 'rxjs';
import {inject} from '@angular/core';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(TokenService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        token.clear();
      }

      return throwError(() => error);
    })
  );
};
