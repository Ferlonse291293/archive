

import {ISectionConfig} from './section-config.interface';
import {StoreFacadeKey} from '../../facades/store-facade.registry';


export interface IConfigController{
  services?:  any
  sections :  ISectionConfig[]
  data?: StoreFacadeKey[]
  state?: StoreFacadeKey[]
}
