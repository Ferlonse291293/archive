import {inject, Injectable, Injector, signal,} from '@angular/core';
import {AuthController} from '../auth-controller';
import {authConfig} from './auth-config';
import {SectionsKey} from '../../core/model/sections-keys.namespace';
import {IBaseSection} from '../../core/base/base-section';


@Injectable({providedIn: 'root'})
export class AuthContextService{
  private injector = inject<Injector>(Injector);

  private controller = signal<AuthController>(new AuthController(authConfig ,this.injector) )


  getController () {
    return this.controller
  }

  getSection(key:  SectionsKey): IBaseSection | undefined {
    return  this.controller().getSection(key)
  }


}
