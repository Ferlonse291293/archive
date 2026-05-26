import {IConfigController} from '../../../core/model/interfaces/config-controller.interface';
import {ClientSearchSectionConfig} from './section-client-search-config';

import {storeFacadeKeys} from '../../../core/facades/store-facade.registry';
import {ClientDocumentsSectionConfig} from './section-client-documents-config';

export const clientConfig: IConfigController =  {
  sections: [new  ClientSearchSectionConfig() , new ClientDocumentsSectionConfig()],
  data: [storeFacadeKeys.CLIENTS,storeFacadeKeys.DOCUMENTS],
  state: [storeFacadeKeys.CLIENTS, storeFacadeKeys.DOCUMENTS]
}
