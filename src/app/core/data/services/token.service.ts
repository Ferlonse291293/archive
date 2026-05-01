import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private KEY = 'access_token';

  get(): string | null {
    return localStorage.getItem(this.KEY);
  }

  set(token: string) {
    localStorage.setItem(this.KEY, token);
  }

  clear() {
    localStorage.removeItem(this.KEY);
  }
}
