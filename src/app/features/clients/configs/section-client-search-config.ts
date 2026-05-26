import {ISectionConfig} from '../../../core/model/interfaces/section-config.interface';
import {SectionsKey, SectionsKeys} from '../../../core/model/sections-keys.namespace';
import {storeFacadeKeys} from '../../../core/facades/store-facade.registry';

export class ClientSearchSectionConfig implements ISectionConfig{
  key: SectionsKey  = SectionsKeys.Clients.documentsClient
  params ={};
  engines: Record<any, unknown> = {};
  data = [storeFacadeKeys.CLIENTS,storeFacadeKeys.DOCUMENTS];
  state = [storeFacadeKeys.CLIENTS, storeFacadeKeys.DOCUMENTS];
}
