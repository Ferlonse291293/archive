import {headersInterceptor} from './interseptors/headers.interceptor';
import {authInterceptor} from './interseptors/auth.interceptor';
import {cacheInterceptor} from './interseptors/cache.interceptor';
import {retryInterceptor} from './interseptors/retry.interceptor';
import {loggingInterceptor} from './interseptors/logging.interceptor';
import {errorInterceptor} from './interseptors/error.interceptor';


export const dataProvider = [
  headersInterceptor,
  authInterceptor,
  cacheInterceptor,
  retryInterceptor,
  loggingInterceptor,
  errorInterceptor
]
