
import {DisplayService} from '../../core/services/display.service';
import {ModalService} from '../../core/services/modal.service';
import {SecurityService} from '../../core/services/security.service';

export const GLOBAL_SERVICES = {
  DISPLAY: DisplayService,
  SECURITY: SecurityService,
  MODAL: ModalService,
} as const;

export type GlobalServiceKey = keyof typeof GLOBAL_SERVICES;

