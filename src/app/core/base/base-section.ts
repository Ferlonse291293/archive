import {IBaseSection} from '../model/interfaces/base-section.interface';
import {ISectionConfig} from '../model/interfaces/section-config.interface';
import {SectionsKey} from '../model/sections-keys.namespace';
import {StoreFacadeKey} from '../facades/store-facade.registry';




export class BaseSection implements IBaseSection{
  key!: SectionsKey
  params: Record<any, any> = {}
  data: Partial<Record<StoreFacadeKey, any>> = {}
  state: Partial<Record<StoreFacadeKey, any>> = {}


  constructor(config: ISectionConfig) {
    this.init(config)
  }
  init(config: ISectionConfig) {
    this.key = config.key ??  undefined;
    this.params = config.params ?? {};
    this.state = config.state ??  undefined;
    this.data = config.data ?? undefined;
  }
  preInit() {

  }
  destroy() {
  }


}
