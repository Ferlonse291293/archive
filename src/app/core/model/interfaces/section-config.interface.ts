import {SectionsKeys} from '../sections-keys.namespace';

/**
 *
 * @param engines - logic components
 */
export interface ISectionConfig {
  key: SectionsKeys
  params?: Record<any, any>
  engines?: Record<any, unknown>
  data?: unknown
  state?: unknown
}
