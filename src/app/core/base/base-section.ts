import {IBaseSection} from '../model/interfaces/base-section.interface';
import {ISectionConfig} from '../model/interfaces/section-config.interface';
import {SectionsKeys} from '../model/sections-keys.namespace';

export class BaseSection implements IBaseSection{
  key: SectionsKeys
  params: Record<any, any>;
  state: unknown;
  data: unknown;

  constructor(config: ISectionConfig) {
    this.init(config)
  }
  init(config: ISectionConfig) {
    this.key = config.key ??  undefined;
    this.params = config.params ?? {};
    this.state = config.params ??  undefined;
    this.data = config.params ?? undefined;
  }
  preInit() {

  }
  destroy() {
  }

}
