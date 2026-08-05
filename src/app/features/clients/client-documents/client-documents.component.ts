import {ChangeDetectionStrategy, Component, inject, OnInit, ViewChild} from '@angular/core';
import {ClientsContextService} from '../configs/clients-context.service';
import {TranslateService} from '@ngx-translate/core';
import {RouterService} from '../../../core/services/router.service';
import {SectionsKeys} from '../../../core/model/sections-keys.namespace';
import {DataFacadeMap, StateFacadeMap} from '../../../core/facades/store-facade.registry';
import {IDocumentTree} from '../../../core/data/endpoints/documents/documents-api.interface';
import {Observable, takeUntil} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {TreeDocumentsComponent} from '../../../shared/components/tree/tree-documents/tree-documents.component';
import {ActiveButtonsComponent, } from './active-buttons-tree/active-buttons.component';
import {Destroy} from '../../../core/helpers/destroy';
import {IBaseSection} from '../../../core/base/base-section';
import {IClientIndividualDetail} from '../../../core/data/endpoints/clients/clients-api.interface';

@Component({
  selector: 'app-client-documents',
  standalone: true,
  imports: [
    AsyncPipe,
    TreeDocumentsComponent,
    ActiveButtonsComponent,
  ],
  templateUrl: './client-documents.component.html',
  styleUrl: './client-documents.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientDocumentsComponent extends Destroy implements OnInit{
  private clientsContext = inject(ClientsContextService);
  private translate = inject(TranslateService);
  private routerService = inject(RouterService);
  @ViewChild(TreeDocumentsComponent)
  private treeDocumentsComponent? :TreeDocumentsComponent
  private searchClientsSection: IBaseSection  = this.clientsContext.getSection(SectionsKeys.Clients.documentsClient)!
  private data:  DataFacadeMap  = this.searchClientsSection.data;
  private state:  StateFacadeMap  = this.searchClientsSection.state;
  public treeDocuments: Observable<IDocumentTree>
  public currentClient: IClientIndividualDetail | null;

  ngOnInit(): void {
    this.treeDocuments = this.state.DOCUMENTS!.getDocumentsTree$()
    this.state.CLIENTS?.getCurrentIndividualClient$().pipe(
      takeUntil(this.componentDestroyed)
    ).subscribe(res => {
      this.currentClient = res
    })

  }



  expandAll() {
    this.treeDocumentsComponent?.expandAll()
  }

  collapseAll() {
    this.treeDocumentsComponent?.collapseAll()
  }
}
