

import {LoginSectionConfig} from './login-section-config';
import {storeFacadeKeys} from '../../core/facades/store-facade.registry';
import {IConfigController} from '../../core/base/base-controller';


export const authConfig: IConfigController =  {
  sections:  [new LoginSectionConfig()],
  data: [storeFacadeKeys.AUTH, storeFacadeKeys.OPTIONS],
  state: [storeFacadeKeys.AUTH]
}
