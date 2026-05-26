import { CanActivateFn } from '@angular/router';
import {SecurityService} from '../services/security.service';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const securityService = inject(SecurityService);

  return securityService.isUserAuthenticated();
};
