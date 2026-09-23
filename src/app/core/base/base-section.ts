import {DataFacadeMap, StateFacadeMap, StoreFacadeKey} from '../facades/store-facade.registry';
import {SectionsKey} from '../model/sections-keys.namespace';
import {EnginesKey} from '../engines/engines-key';

export interface IBaseSection {
  key: SectionsKey
  params: Record<any, any>;
  engines?: Partial<Record<EnginesKey, any>> | undefined;
  state: Partial<StateFacadeMap>
  data: Partial<DataFacadeMap>
  preInit(): void;
  init(config: ISectionConfig): void;
  destroy(): void;
}

export interface ISectionConfig<E extends Partial<Record<EnginesKey, any>> = Partial<Record<EnginesKey, any>>> {
  key: SectionsKey
  params?: Record<any, any>
  engines?: E;
  data?: any
  state?: any
}

export class BaseSection<E extends Partial<Record<EnginesKey, any>> = Partial<Record<EnginesKey, any>>>
  implements IBaseSection {
  key!: SectionsKey
  params: Record<any, any> = {}
  data: Partial<Record<StoreFacadeKey, any>> = {}
  state: Partial<Record<StoreFacadeKey, any>> = {}
  engines: E | undefined;
  constructor(config: ISectionConfig<E>) {
    this.init(config)
  }

  init(config: ISectionConfig<E>) {
    this.key = config.key;
    this.params = config.params ?? {};
    this.state = config.state;
    this.data = config.data;
    this.engines = config.engines;
  }

  preInit() {}
  destroy() {}
}
