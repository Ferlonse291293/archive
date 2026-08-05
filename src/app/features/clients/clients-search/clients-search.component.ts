import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {ClientsContextService} from '../configs/clients-context.service';
import {TableDynamicComponent} from '../../../shared/components/table/table-dynamic/table-dynamic.component';
import {SectionsKeys} from '../../../core/model/sections-keys.namespace';
import {
  IClientIndividualListItem,
  IClientIndividualsFilter,
} from '../../../core/data/endpoints/clients/clients-api.interface';
import {ClientSearchFormComponent} from './client-search-form/client-search-form.component';
import {TranslateService} from '@ngx-translate/core';
import {DataFacadeMap, StateFacadeMap} from '../../../core/facades/store-facade.registry';
import {RouterService} from '../../../core/services/router.service';
import {NavLinks} from '../../../core/router/navigation';
import {AsyncPipe} from '@angular/common';
import {map, Observable,} from 'rxjs';
import {SelectOption} from '../../../shared/components/form/select-field/select-field.component';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {AppPaginatorComponent} from '../../../shared/components/table/paginator/paginator.component';
import {IDataGridController} from '../../../core/engines/data-grid/data-grid-controller';
import {EnginesKey} from '../../../core/engines/engines-key';
import {IBaseSection} from '../../../core/base/base-section';
import {PAGINATION_SORT} from '../../../core/model/const/pagination-sort';


export interface IClientIndividualRow{
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
    ClientSearchFormComponent,
    AsyncPipe,
    MatPaginatorModule,
    AppPaginatorComponent
  ],
  templateUrl: './clients-search.component.html',
  styleUrl: './clients-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsSearchComponent implements OnInit{
  private clientsContext = inject(ClientsContextService);
  private translate = inject(TranslateService);
  private routerService = inject(RouterService);
  private searchClientsSection: IBaseSection;
  public dataGridController: IDataGridController<IClientIndividualRow, IClientIndividualsFilter>;
  private data: DataFacadeMap;
  private state: StateFacadeMap;
  public departmentsOptions$: Observable<SelectOption[]>

  ngOnInit(): void {
    this.searchClientsSection = this.clientsContext.getSection(SectionsKeys.Clients.searchClient)!;
    this.data = this.searchClientsSection.data;
    this.state = this.searchClientsSection.state;
    this.dataGridController = this.searchClientsSection.engines![EnginesKey.DATA_GRID]
    this.dataGridController.setRequest(async (req) => {
      const res = await this.data.CLIENTS!.getIndividualClients(req);
      return {
        meta: res.meta,
        data: this.formatClients(res.data)
      };
    });
    this.departmentsOptions$ = this.state.OPTIONS!.getDepartmentsOptions$().pipe(
      map(d => d.map(({ name, code }) => ({ label: name, value: code })))
    )

  }

  getClients(valueForm: IClientIndividualsFilter) {
    const req= {
      page: 0,
      limit: this.dataGridController.paginator.pageSize(),
      sort: PAGINATION_SORT.DESC,
      body: valueForm
    };
    this.dataGridController.onRequest(req).then(res => {
      if (res?.data && res?.meta) this.dataGridController.init(res.meta, res.data, req)
    });
  }

  formatClients(items:  IClientIndividualListItem[]): IClientIndividualRow[]{
    const arr = [...items]
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
    }, [] as IClientIndividualRow[])
  }

  getClientDetails(clientRow: IClientIndividualRow) {
    Promise.all([ this.data.DOCUMENTS!.getDocumentsTree(clientRow.clientId), this.data.CLIENTS!.getIndividualClient(clientRow.clientId)]).then(([res1 , res2]) => {
      this.routerService.redirectTo(NavLinks.CLIENTS_DOCUMENTS)
    })
  }


  onPageChange($event: PageEvent) {
    console.log($event)
  }
}
