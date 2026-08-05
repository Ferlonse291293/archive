

import {Injector} from '@angular/core';
import {SectionsFactory} from './sections-factory';


import {DataFacadeMap, StateFacadeMap, StoreFacadeKey} from '../facades/store-facade.registry';
import {StoreFacadeService} from '../facades/store-facade.service';
import {SectionsKey} from '../model/sections-keys.namespace';
import {IBaseSection, ISectionConfig} from './base-section';


export interface IBaseController {
  getSection(key:  SectionsKey): IBaseSection | undefined
  params: unknown
  destroy(): void
}

export interface IConfigController{
  sections :  ISectionConfig[]
  data?: StoreFacadeKey[]
  state?: StoreFacadeKey[]
}



export class BaseController implements IBaseController {
  protected sections:  Partial<Record<SectionsKey, IBaseSection>> = {};
  params: unknown;
  protected  state:Partial<StateFacadeMap> = {} as Partial<StateFacadeMap>;
  protected  data:Partial<DataFacadeMap> = {} as Partial<DataFacadeMap>;
  constructor(config: IConfigController,  injector: Injector) {
   this.init(config, injector)
  }

  private  preInit(){}
  protected   init(config: IConfigController, injector: Injector) {
      if(config.data) this.initData(config.data, injector)
      if(config.state)this.initState(config.state, injector)
      this.initSections(config.sections)
  }
  public destroy(){

  }

  private initSections(sectionConfigs: ISectionConfig[] ){

    this.sections = SectionsFactory.createSections(sectionConfigs.map(conf => {
         return {...conf ,
           data:  Object.fromEntries( conf.data.map((key: StoreFacadeKey)  => [key, this.data[key]]) ),
           state: Object.fromEntries( conf.state.map((key: StoreFacadeKey) => [key, this.state[key]])),
           engines: conf.engines
         }
      })
    )

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
