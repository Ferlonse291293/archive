
import {SectionsKey, SectionsKeys} from '../../../core/model/sections-keys.namespace';
import {storeFacadeKeys} from '../../../core/facades/store-facade.registry';
import {ISectionConfig} from '../../../core/base/base-section';
import {EnginesKey} from '../../../core/engines/engines-key';
import {DataGridController, IDataGridController} from '../../../core/engines/data-grid/data-grid-controller';
import {IClientIndividualRow} from '../clients-search/clients-search.component';
import {IClientIndividualsFilter} from '../../../core/data/endpoints/clients/clients-api.interface';
import {DataGridTable} from '../../../core/engines/data-grid/data-grid-table';
import {DataGridPagination} from '../../../core/engines/data-grid/data-grid-pagination';
import {DataGridCache} from '../../../core/engines/data-grid/data-grid-cache';
import {
  DocumentController,
  IDocumentController,
  IDocumentControllerConf
} from '../../../core/engines/document-controller/document-controller';

const docConfig: IDocumentControllerConf = {
  create: true,
  update: true,
  uploadFiles: true
}


export class ClientDocumentsSectionConfig implements ISectionConfig {
  key: SectionsKey = SectionsKeys.Clients.documentsClient;
  params = {};
  data = [storeFacadeKeys.CLIENTS, storeFacadeKeys.DOCUMENTS,  storeFacadeKeys.FILES];
  state = [storeFacadeKeys.CLIENTS, storeFacadeKeys.DOCUMENTS];
  engines: { [EnginesKey.DOCUMENT_CONTROLLER]: IDocumentController } = this.setEngines();

  private setEngines(): { [EnginesKey.DOCUMENT_CONTROLLER]: IDocumentController } {
    return {
      [EnginesKey.DOCUMENT_CONTROLLER]: new DocumentController(docConfig)
    };
  }
}
