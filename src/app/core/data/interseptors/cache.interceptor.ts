import {HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {CacheService} from '../services/cache.service';
import {inject} from '@angular/core';
import {NO_CACHE} from '../utils/http-context.tokens';
import {of, tap} from 'rxjs';
import {API_CONFIG} from '../api/api.config';

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cache = inject(CacheService);

  if (req.method !== 'GET' || req.context.get(NO_CACHE)) {
    return next(req);
  }

  const key = req.urlWithParams;
  const cached = cache.get(key);

  if (cached) {
    return of(new HttpResponse({ body: cached }));
  }

  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        cache.set(key, event.body, API_CONFIG.cacheTTL);
      }
    })
  );
};
