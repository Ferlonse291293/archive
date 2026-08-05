import {Injectable} from '@angular/core';
import {UserRole} from '../../shared/models/enums/role.enum';

@Injectable({ providedIn: 'root' })
export class SecurityService {
  private permissions = new Set<string>();
  private role: UserRole = UserRole.User;
  private csrfToken: string = '';

  setPermissions(perms: string[]) {
    this.permissions = new Set(perms);
  }

  setCsrfToken(csrfToken: string) {
    this.csrfToken = csrfToken;
  }

  setRole(role: UserRole) {
    this.role = role;
  }

  can(permission: string): boolean {
    return this.permissions.has(permission);
  }

  canAny(perms: string[]): boolean {
    return perms.some(p => this.permissions.has(p));
  }

  hasRole(role: string): boolean {
    return this.role === role;
  }

  getCsrfToken() {
   return  this.csrfToken ;
  }

  clearCsrfToken(): void {
  this.csrfToken = '' ;
  }

  isUserAuthenticated(): boolean{
   return this.csrfToken !== '' && this.permissions.size !== 0
  }
}
