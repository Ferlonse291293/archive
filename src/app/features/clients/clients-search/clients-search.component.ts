import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {ClientsContextService} from '../configs/clients-context.service';

import {TableDynamicComponent} from '../../../shared/components/table/table-dynamic/table-dynamic.component';
import {IColumnsTable} from '../../../core/engines/table/table-controller';
import {SectionsKeys} from '../../../core/model/sections-keys.namespace';
import {IAuthStateFacade} from '../../../core/facades/data/auth-data-facade';
import {ClientDataFacade, IClientDataFacade} from '../../../core/facades/data/client-data-facade';
import {
  IGetClientsBodyReq,
  IGetClientsBodyRes,
  IGetClientsReq
} from '../../../core/data/endpoints/clients/clients-api.interface';
import {ClientSearchFormComponent} from './client-search-form/client-search-form.component';
import {MatTableDataSource} from '@angular/material/table';
import {TranslateService} from '@ngx-translate/core';
import {DocumentsDataFacade, IDocumentsDataFacade} from '../../../core/facades/data/documents-data.facade';
import {IBaseSection} from '../../../core/model/interfaces/base-section.interface';
import {DataFacadeMap, StoreFacadeKey} from '../../../core/facades/store-facade.registry';
import {RouterService} from '../../../core/services/router.service';
import {NavLinks} from '../../../core/router/navigation';

interface IClientRow {
  clientId: string;
  fullName: string;
  code: string;
  type: string;
  seriesNumberDoc: string;
  department: string;
  status: string;
}

@Component({
  selector: 'app-clients-search',
  standalone: true,
  imports: [
    TableDynamicComponent,
    ClientSearchFormComponent
  ],
  templateUrl: './clients-search.component.html',
  styleUrl: './clients-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsSearchComponent {
  private clientsContext = inject(ClientsContextService);
  private translate = inject(TranslateService);
  private routerService = inject(RouterService)
  private searchClientsSection: IBaseSection  = this.clientsContext.getSection(SectionsKeys.Clients.searchClient)!
  dataSource = new MatTableDataSource<IClientRow>()
  private data:  DataFacadeMap  = this.searchClientsSection.data

  columns = signal<IColumnsTable[]>( [
    {
      name:  this.translate.instant('CLIENTS.CLIENT_TABLE_COL.FULL_NAME' ),
      keyCol: 'fullName'
    },
    {
      name:  this.translate.instant('CLIENTS.CLIENT_TABLE_COL.CODE_CLIENT') ,
      keyCol: 'code'
    },
    {
      name: this.translate.instant('CLIENTS.CLIENT_TABLE_COL.TYPE')  ,
      keyCol: 'type'
    },
    {
      name: this.translate.instant('CLIENTS.CLIENT_TABLE_COL.SERIES_NUMBER_IDENTITY_DOCUMENT') ,
      keyCol: 'seriesNumberDoc'
    },

    {
      name:this.translate.instant('CLIENTS.CLIENT_TABLE_COL.DEPARTMENT') ,
      keyCol: 'department'
    },
    {
      name:this.translate.instant('CLIENTS.CLIENT_TABLE_COL.STATUS') ,
      keyCol: 'status'
    }
  ])


  getClients(valueForm: IGetClientsBodyReq) {
    let req: IGetClientsReq = {
      page: 1,
      limit: 20,
      sort:  'desc',
      body: valueForm
    }
    this.data.CLIENTS!.getClients(req).then(res => {

      console.log(this.formatClients(res.data))

      this.dataSource.data =  this.formatClients(res.data);

    })
  }

  formatClients(clientsRes:  IGetClientsBodyRes[]): IClientRow[]{
    const arr = [...clientsRes]
    return arr.reduce((acc,el) => {
      return [...acc, {
        clientId: el.clientId,
        fullName: el.fullName,
        code: el.code,
        type: el.type,
        seriesNumberDoc: el.passportNumber,
        department: el.department,
        status: el.status
      }]
    }, [] as IClientRow[])
  }

  getClientDetails(clientRow: IClientRow) {
    Promise.all([ this.data.DOCUMENTS!.getDocumentsTree(clientRow.clientId), this.data.CLIENTS!.getClient(clientRow.clientId)]).then(([res1 , res2]) => {
      this.routerService.redirectTo(NavLinks.CLIENTS_DOCUMENTS)
    })
  }
}
