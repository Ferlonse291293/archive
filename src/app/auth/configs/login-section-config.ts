
import {SectionsKey, SectionsKeys} from '../../core/model/sections-keys.namespace';
import {storeFacadeKeys} from '../../core/facades/store-facade.registry';
import {ISectionConfig} from '../../core/base/base-section';


export class LoginSectionConfig implements ISectionConfig{
  key: SectionsKey  = SectionsKeys.Auth.login;
  params ={};
  engines: Record<any, unknown> = {};
  data = [storeFacadeKeys.AUTH, storeFacadeKeys.OPTIONS];
  state = [storeFacadeKeys.AUTH];
}
