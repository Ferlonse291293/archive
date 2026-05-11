import {InjectionToken} from '@angular/core';
import {DisplayService} from '../../core/services/display.service';
import {RoleService} from '../../core/services/role.service';

export const GLOBAL_SERVICES = {
  DISPLAY: new InjectionToken<DisplayService>('DISPLAY'),
  ROLE: new InjectionToken<RoleService>('ROLE'),
  SECURITY: new InjectionToken<RoleService>('ROLE'),
  MODAL: new InjectionToken<RoleService>('ROLE'),
} as const;


// export class GlobalServicesHelper {
//
//
//   protected getService<T>(token: InjectionToken<T>): T {
//     return this.services.get(token);
//   }
//
// }
