
import {SectionsKey, SectionsKeys} from '../../../core/model/sections-keys.namespace';
import {storeFacadeKeys} from '../../../core/facades/store-facade.registry';
import {ISectionConfig} from '../../../core/base/base-section';

export class ClientDocumentsSectionConfig implements ISectionConfig{
  key: SectionsKey  = SectionsKeys.Clients.documentsClient
  params ={};
  engines: Record<any, unknown> = {};
  data = [storeFacadeKeys.CLIENTS, storeFacadeKeys.DOCUMENTS];
  state = [storeFacadeKeys.CLIENTS ,  storeFacadeKeys.DOCUMENTS];

}
