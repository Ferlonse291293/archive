import {ISectionConfig} from '../../core/model/interfaces/section-config.interface';
import {SectionsKey, SectionsKeys} from '../../core/model/sections-keys.namespace';
import {storeFacadeKeys} from '../../core/facades/store-facade.registry';


export class LoginSectionConfig implements ISectionConfig{
  key: SectionsKey  = SectionsKeys.Auth.login;
  params ={};
  engines: Record<any, unknown> = {};
  data = [storeFacadeKeys.AUTH];
  state = [storeFacadeKeys.AUTH];
}
