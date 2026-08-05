
import {DisplayService} from '../../services/display.service';
import {ModalService} from '../../services/modal.service';
import {SecurityService} from '../../services/security.service';
import {RouterService} from '../../services/router.service';

export const GLOBAL_SERVICES = {
  DISPLAY: DisplayService,
  SECURITY: SecurityService,
  MODAL: ModalService,
  ROUTER: RouterService,
} as const;

export type GlobalServiceKey = keyof typeof GLOBAL_SERVICES;

