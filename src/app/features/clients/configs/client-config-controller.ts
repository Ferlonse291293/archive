import {IConfigController} from '../../../core/model/interfaces/config-controller.interface';
import {SectionsFactory} from '../../../core/base/sections-factory';
import {SectionClientConfig} from './section-client-config';
import {GLOBAL_SERVICES} from '../../../shared/consts/global-services';

export const clientConfig: IConfigController =  {
  sections: SectionsFactory.createSections([SectionClientConfig]),
  services: [GLOBAL_SERVICES.DISPLAY, GLOBAL_SERVICES.ROLE, GLOBAL_SERVICES.SECURITY]
}
