import {ISectionConfig} from '../../core/model/interfaces/section-config.interface';
import {SectionsKey, SectionsKeys} from '../../core/model/sections-keys.namespace';
import {GlobalServiceKey} from '../../shared/consts/global-services';
import {storeFacadeKeys} from '../../core/facades/store-facade.registry';


export class LoginSectionConfig implements ISectionConfig{
  key: SectionsKey  = SectionsKeys.Auth.login;
  params ={};
  engines: Record<any, unknown> = {};
  services: Map<GlobalServiceKey, any> = new Map();
  data = [storeFacadeKeys.AUTH];
  state = [storeFacadeKeys.AUTH];
}
