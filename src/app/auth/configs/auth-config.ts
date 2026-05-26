import {IConfigController} from '../../core/model/interfaces/config-controller.interface';
import {GLOBAL_SERVICES} from '../../shared/consts/global-services';
import {LoginSectionConfig} from './login-section-config';
import {storeFacadeKeys} from '../../core/facades/store-facade.registry';


export const authConfig: IConfigController =  {
  sections:  [new LoginSectionConfig()],
  services: [GLOBAL_SERVICES.DISPLAY, GLOBAL_SERVICES.SECURITY],
  data: [storeFacadeKeys.AUTH],
  state: [storeFacadeKeys.AUTH]
}
