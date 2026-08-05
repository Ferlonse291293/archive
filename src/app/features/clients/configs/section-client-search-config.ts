
import {SectionsKey, SectionsKeys} from '../../../core/model/sections-keys.namespace';
import {storeFacadeKeys} from '../../../core/facades/store-facade.registry';
import {EnginesKey} from '../../../core/engines/engines-key';
import {DataGridController, IDataGridController} from '../../../core/engines/data-grid/data-grid-controller';
import {DataGridTable} from '../../../core/engines/data-grid/data-grid-table';
import {DataGridPagination} from '../../../core/engines/data-grid/data-grid-pagination';

import {IColumnsTable} from '../../../core/engines/table/table-controller';
import {ISectionConfig} from '../../../core/base/base-section';

import {DataGridCache} from '../../../core/engines/data-grid/data-grid-cache';
import {
  IClientIndividualsFilter,
} from '../../../core/data/endpoints/clients/clients-api.interface';
import {IClientIndividualRow} from '../clients-search/clients-search.component';

const columns: IColumnsTable[] =[
  {
    name: 'CLIENTS.CLIENT_TABLE_COL.FULL_NAME',
    keyCol: 'fullName'
  },
  {
    name: 'CLIENTS.CLIENT_TABLE_COL.CODE_CLIENT',
    keyCol: 'code'
  },
  {
    name: 'CLIENTS.CLIENT_TABLE_COL.TYPE',
    keyCol: 'type'
  },
  {
    name: 'CLIENTS.CLIENT_TABLE_COL.SERIES_NUMBER_IDENTITY_DOCUMENT',
    keyCol: 'seriesNumberDoc'
  },

  {
    name: 'CLIENTS.CLIENT_TABLE_COL.DEPARTMENT',
    keyCol: 'department'
  },
  {
    name: 'CLIENTS.CLIENT_TABLE_COL.STATUS',
    keyCol: 'status'
  }
]




export class ClientSearchSectionConfig implements ISectionConfig{
  key: SectionsKey  = SectionsKeys.Clients.searchClient
  params ={};

  data = [storeFacadeKeys.CLIENTS, storeFacadeKeys.DOCUMENTS];
  state = [storeFacadeKeys.CLIENTS, storeFacadeKeys.OPTIONS];
  engines: {[EnginesKey.DATA_GRID]: IDataGridController<IClientIndividualRow, IClientIndividualsFilter> } = this.setEngines();

  private setEngines(): Record<EnginesKey, any> {
    return {
      [EnginesKey.DATA_GRID] : new DataGridController(new DataGridTable(columns), new DataGridPagination(), new DataGridCache())
    }
  }
}
