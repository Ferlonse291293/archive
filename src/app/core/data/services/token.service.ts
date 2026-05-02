import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private KEY = 'access_token';

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  get(): string | null {
    if (!this.isBrowser) return null;
    return localStorage.getItem(this.KEY);
  }

  set(token: string) {
    if (!this.isBrowser) return;
    localStorage.setItem(this.KEY, token);
  }

  clear() {
    if (!this.isBrowser) return;
    localStorage.removeItem(this.KEY);
  }
}
