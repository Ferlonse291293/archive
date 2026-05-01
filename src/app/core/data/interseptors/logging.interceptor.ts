import {inject} from '@angular/core';
import { HttpInterceptorFn,HttpResponse} from '@angular/common/http';
import {LoggerService} from '../services/logger.service';
import {tap} from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const logger = inject(LoggerService);
  const started = Date.now();

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          logger.log(req.method, req.url, Date.now() - started);
        }
      },
      error: (err) => logger.error(req.method, req.url, err)
    })
  );
};
