import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(...args: any[]) {
    console.log('[API]', ...args);
  }

  error(...args: any[]) {
    console.error('[API]', ...args);
  }
}
