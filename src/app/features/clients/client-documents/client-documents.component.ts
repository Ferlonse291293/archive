import {ChangeDetectionStrategy, Component, computed, inject, OnInit, signal, ViewChild} from '@angular/core';
import {ClientsContextService} from '../configs/clients-context.service';
import {TranslateService} from '@ngx-translate/core';
import {SectionsKeys} from '../../../core/model/sections-keys.namespace';
import {DataFacadeMap, StateFacadeMap} from '../../../core/facades/store-facade.registry';
import {IDocumentTree} from '../../../core/data/endpoints/documents/documents-api.interface';
import {Observable, takeUntil} from 'rxjs';
import {AsyncPipe} from '@angular/common';

import {ActiveButtonsComponent, } from './active-buttons-tree/active-buttons.component';
import {Destroy} from '../../../core/helpers/destroy';
import {IBaseSection} from '../../../core/base/base-section';
import {IClientIndividualDetail} from '../../../core/data/endpoints/clients/clients-api.interface';
import {TreeItemsComponent} from '../../../shared/components/tree/tree-documents/tree-items.component';
import { IDocumentController} from '../../../core/engines/document-controller/document-controller';
import {EnginesKey} from '../../../core/engines/engines-key';
import {DropdownComponent, IDropdownItem} from '../../../shared/components/form/dropdown/dropdown.component';
import {FilePreviewComponent} from '../../../shared/components/file-viewer/file-viewer.component';
import {getIconPath} from '../../../core/helpers/mime-type-files';


@Component({
  selector: 'app-client-documents',
  standalone: true,
  imports: [
    AsyncPipe,
    TreeItemsComponent,
    ActiveButtonsComponent,
    DropdownComponent,
    FilePreviewComponent,
  ],
  templateUrl: './client-documents.component.html',
  styleUrl: './client-documents.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ClientDocumentsComponent extends Destroy implements OnInit {
  private clientsContext = inject(ClientsContextService);
  private translate = inject(TranslateService);
  private

  @ViewChild(TreeItemsComponent)
  private treeItemsComponent?: TreeItemsComponent<IDocumentTree>
  private searchClientsSection: IBaseSection = this.clientsContext.getSection(SectionsKeys.Clients.documentsClient)!
  private data: DataFacadeMap = this.searchClientsSection.data;
  private state: StateFacadeMap = this.searchClientsSection.state;
  public treeDocuments: Observable<IDocumentTree>
  public currentClient: IClientIndividualDetail | null;
  public documentController: IDocumentController
  public currentFile = signal<{ url: string, mimeType: string }>({url: '', mimeType: ''});


  ngOnInit(): void {
    this.treeDocuments = this.state.DOCUMENTS!.getDocumentsTree$()
    this.documentController = this.searchClientsSection.engines![EnginesKey.DOCUMENT_CONTROLLER]
    this.state.CLIENTS?.getCurrentIndividualClient$().pipe(
      takeUntil(this.componentDestroyed)
    ).subscribe(res => {
      this.currentClient = res
    })
  }

  expandAll() {
    this.treeItemsComponent?.expandAll()
  }

  collapseAll() {
    this.treeItemsComponent?.collapseAll()
  }

  getDocument($event: IDocumentTree) {
    this.data.DOCUMENTS?.getDocument($event.id).then(res => {
      if (res.id) {
        this.documentController.clear()
        this.currentFile.set({url: '', mimeType: ''})
        this.documentController.init(res)
      }
    })
  }


  fileItems = computed(() => {
    const files = this.documentController.fileManager.files();
    return files.map(f => {
      return {
        imgUrl: getIconPath(f.fileName, f.mimeType),
        title: f.fileName,
        value: f.id,
        hasImage: true
      }
    })
  });


  async getFile(item: IDropdownItem) {
    const {fileManager} = this.documentController
    if (!fileManager.checkExistFileUrl(item.value)) {
      const fileUrl = await this.data.FILES!.getFileUrlById(item.value)
      fileManager.setFileUrl(item.value, fileUrl)
    }
    this.currentFile.set({
      url: fileManager.getFileUrl(item.value)!,
      mimeType: fileManager.files().find(el => el.id === item.value)!.mimeType
    })
  }
}
