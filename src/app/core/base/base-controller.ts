import {IBaseController} from '../model';
import {IBaseSection} from '../model/interfaces/base-section.interface';
import {IConfigController} from '../model/interfaces/config-controller.interface';
import {Injector} from '@angular/core';
import { GlobalServiceKey} from '../../shared/consts/global-services';
import {SectionsFactory} from './sections-factory';
import {ISectionConfig} from '../model/interfaces/section-config.interface';

import {DataFacadeMap, StateFacadeMap, StoreFacadeKey} from '../facades/store-facade.registry';
import {StoreFacadeService} from '../facades/store-facade.service';
import {SectionsKey} from '../model/sections-keys.namespace';


export class BaseController implements IBaseController {
  protected sections:  Partial<Record<SectionsKey, IBaseSection>> = {};
  params: unknown;
  protected  state: Partial<Record<StoreFacadeKey, any>> ={};
  protected  data: Partial<Record<StoreFacadeKey, any>> ={};
  protected  services= new Map<GlobalServiceKey, any>();
  constructor(config: IConfigController,  injector: Injector) {
   this.init(config, injector)
  }

  private  preInit(){}
  protected   init(config: IConfigController, injector: Injector) {
      if(config.data) this.initData(config.data, injector)
      if(config.state)this.initState(config.state, injector)
      this.initServices(config.services, injector)
      this.initSections(config.sections)

  }
  public destroy(){

  }

  private initSections(sectionConfigs: ISectionConfig[] ){
    this.sections = SectionsFactory.createSections(sectionConfigs.map(conf => {
         return {...conf ,
           services : this.services  ,
           data:  Object.fromEntries( conf.data.map((key: StoreFacadeKey)  => [key, this.data[key]]) ),
           state: Object.fromEntries( conf.state.map((key: StoreFacadeKey) => [key, this.state[key]]))
         }
      })
    )

  }

  private initServices(servicesConfig: GlobalServiceKey[], injector: Injector) {
    servicesConfig.forEach(service => {
      this.services.set(
        service,
        injector.get(service)
      );
    });
  }

  private initData(keys: StoreFacadeKey[], injector: Injector){
    if(keys.length === 0 || !keys) return
    const sFS =  injector.get(StoreFacadeService)
    this.data = Object.fromEntries(
      keys.map(k=> [k, sFS.getDataFacade(k)])
    )  as Partial<DataFacadeMap>;
  }

  private initState(keys: StoreFacadeKey[], injector: Injector) {
    if(keys.length === 0 || !keys) return
    const sFS =  injector.get(StoreFacadeService)
    this.state = Object.fromEntries(
      keys.map(k => [k, sFS.getStateFacade(k)])
    )  as Partial<StateFacadeMap>;
  }

  getSection(key:  SectionsKey): IBaseSection | undefined{
    if(this.sections[key]){
      return this.sections[key]
    }else return undefined
  }


}
