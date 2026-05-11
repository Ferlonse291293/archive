import {IBaseSection} from './base-section.interface';
import {SectionsKeys} from '../sections-keys.namespace';
import {GLOBAL_SERVICES} from '../../../shared/consts/global-services';

export interface IConfigController{
  services:  GLOBAL_SERVICES[]
  sections : Record<SectionsKeys , IBaseSection>
}
