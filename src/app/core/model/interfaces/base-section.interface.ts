import {ISectionConfig} from './section-config.interface';
import {SectionsKeys} from '../sections-keys.namespace';

export interface IBaseSection{
  key: SectionsKeys
  params: Record<any, any>;
  state: unknown;
  data: unknown;
  preInit()
  init(config: ISectionConfig)
  destroy()
}
