import {SectionsKey} from '../model/sections-keys.namespace';
import {DataFacadeMap, StateFacadeMap, StoreFacadeKey} from '../facades/store-facade.registry';
import {EnginesKey} from '../engines/engines-key';

export interface IBaseSection{
  key: SectionsKey
  params: Record<any, any>;
  engines?: Partial<Record<EnginesKey, any>>  | undefined ;
  state: Partial<StateFacadeMap>
  data: Partial<DataFacadeMap>
  preInit(): void;
  init(config: ISectionConfig): void;
  destroy(): void;
}

export interface ISectionConfig {
  key: SectionsKey
  params?: Record<any, any>
  engines?: Record<EnginesKey, any>;
  data?:any
  state?: any
}



export class BaseSection implements IBaseSection{
  key!: SectionsKey
  params: Record<any, any> = {}
  data: Partial<Record<StoreFacadeKey, any>> = {}
  state: Partial<Record<StoreFacadeKey, any>> = {}
  engines: Partial<Record<EnginesKey, any>>  | undefined ;

  constructor(config: ISectionConfig) {
    this.init(config)
  }
  init(config: ISectionConfig) {
    this.key = config.key ??  undefined;
    this.params = config.params ?? {};
    this.state = config.state ??  undefined;
    this.data = config.data ?? undefined;
    this.engines = config.engines ?? undefined;
  }
  preInit() {

  }
  destroy() {
  }


}
