import {ChangeDetectionStrategy, Component, inject, OnInit, ViewChild} from '@angular/core';
import {ClientsContextService} from '../configs/clients-context.service';
import {TranslateService} from '@ngx-translate/core';
import {RouterService} from '../../../core/services/router.service';
import {IBaseSection} from '../../../core/model/interfaces/base-section.interface';
import {SectionsKeys} from '../../../core/model/sections-keys.namespace';
import {DataFacadeMap, StateFacadeMap} from '../../../core/facades/store-facade.registry';
import {IDocumentTree} from '../../../core/data/endpoints/documents/documents-api.interface';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {TreeDocumentsComponent} from '../../../shared/components/tree/tree-documents/tree-documents.component';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-client-documents',
  standalone: true,
  imports: [
    AsyncPipe,
    TreeDocumentsComponent,
    MatIcon,
  ],
  templateUrl: './client-documents.component.html',
  styleUrl: './client-documents.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientDocumentsComponent implements OnInit{
  private clientsContext = inject(ClientsContextService);
  private translate = inject(TranslateService);
  private routerService = inject(RouterService);
  @ViewChild(TreeDocumentsComponent)
  private treeDocumentsComponent? :TreeDocumentsComponent
  private searchClientsSection: IBaseSection  = this.clientsContext.getSection(SectionsKeys.Clients.documentsClient)!
  private data:  DataFacadeMap  = this.searchClientsSection.data;
  private state:  StateFacadeMap  = this.searchClientsSection.state;
  public treeDocuments: Observable<IDocumentTree>

  ngOnInit(): void {
    this.treeDocuments = this.state.DOCUMENTS!.getDocumentsTree$()
  }


  expandAll() {
    this.treeDocumentsComponent?.expandAll()
  }

  collapseAll() {
    this.treeDocumentsComponent?.collapseAll()
  }
}
