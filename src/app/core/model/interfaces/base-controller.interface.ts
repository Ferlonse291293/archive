import {SectionsKey} from '../sections-keys.namespace';
import {IBaseSection} from './base-section.interface';


export interface IBaseController {
  getSection(key:  SectionsKey): IBaseSection | undefined
  params: unknown
  destroy(): void
}
