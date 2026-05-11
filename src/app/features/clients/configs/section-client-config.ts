import {ISectionConfig} from '../../../core/model/interfaces/section-config.interface';
import { SectionsKeys} from '../../../core/model/sections-keys.namespace';

export class SectionClientConfig implements ISectionConfig{
  key: SectionsKeys.Clients.searchClient
  params?: Record<any, any>
  engines?: Record<any, unknown>
  data?: unknown
  state?: unknown
}
