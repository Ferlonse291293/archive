import {ISectionConfig} from './section-config.interface';
import {SectionsKey} from '../sections-keys.namespace';
import {DataFacadeMap, StateFacadeMap, StoreFacadeKey} from '../../facades/store-facade.registry';

export interface IBaseSection{
  key: SectionsKey
  params: Record<any, any>;
  state: Partial<StateFacadeMap>
  data: Partial<DataFacadeMap>
  preInit(): void;
  init(config: ISectionConfig): void;
  destroy(): void;
}
