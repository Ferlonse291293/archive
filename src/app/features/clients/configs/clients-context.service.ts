import {inject, Injectable, Injector, signal} from '@angular/core';
import {SectionsKey} from '../../../core/model/sections-keys.namespace';

import {ClientController} from '../client-controller';
import {clientConfig} from './client-config-controller';
import {RouterService} from '../../../core/services/router.service';
import {IBaseSection} from '../../../core/base/base-section';


@Injectable({providedIn: 'root'})

export class ClientsContextService {
  private injector = inject<Injector>(Injector);
  private  routerService = inject(RouterService)

  private controller = signal<ClientController>(new ClientController(clientConfig ,this.injector) )
  getController () {
    return this.controller
  }
  getSection(key:  SectionsKey): IBaseSection | undefined {
    return  this.controller().getSection(key)
  }







}
