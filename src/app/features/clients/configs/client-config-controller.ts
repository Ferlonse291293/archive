
import {ClientSearchSectionConfig} from './section-client-search-config';

import {storeFacadeKeys} from '../../../core/facades/store-facade.registry';
import {ClientDocumentsSectionConfig} from './section-client-documents-config';
import {IConfigController} from '../../../core/base/base-controller';

export const clientConfig: IConfigController =  {
  sections: [new  ClientSearchSectionConfig() , new ClientDocumentsSectionConfig()],
  data: [storeFacadeKeys.CLIENTS,storeFacadeKeys.DOCUMENTS],
  state: [storeFacadeKeys.CLIENTS, storeFacadeKeys.DOCUMENTS, storeFacadeKeys.OPTIONS]
}
