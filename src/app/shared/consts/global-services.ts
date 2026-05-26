
import {DisplayService} from '../../core/services/display.service';
import {ModalService} from '../../core/services/modal.service';
import {SecurityService} from '../../core/services/security.service';
import {RouterService} from '../../core/services/router.service';

export const GLOBAL_SERVICES = {
  DISPLAY: DisplayService,
  SECURITY: SecurityService,
  MODAL: ModalService,
  ROUTER: RouterService,
} as const;

export type GlobalServiceKey = keyof typeof GLOBAL_SERVICES;

