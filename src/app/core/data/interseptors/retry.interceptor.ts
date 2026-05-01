import {API_CONFIG} from '../api/api.config';
import {retry} from 'rxjs';
import {HttpInterceptorFn} from '@angular/common/http';


export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    retry({
      count: API_CONFIG.retryCount,
      delay: API_CONFIG.retryDelay
    })
  );
};
