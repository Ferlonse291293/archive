import {ISectionConfig} from './section-config.interface';
import {SectionsKey} from '../sections-keys.namespace';
import {StoreFacadeKey} from '../../facades/store-facade.registry';

export interface IBaseSection{
  key: SectionsKey
  params: Record<any, any>;
  state: Partial<Record<StoreFacadeKey, any>>
  data: Partial<Record<StoreFacadeKey, any>>
  preInit(): void;
  init(config: ISectionConfig): void;
  destroy(): void;
}
