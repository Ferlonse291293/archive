import {SectionsKey} from '../sections-keys.namespace';
import { GlobalServiceKey} from '../../../shared/consts/global-services';



/**
 *
 * @param engines - logic components
 */
export interface ISectionConfig {
  key: SectionsKey
  params?: Record<any, any>
  engines?: Record<any, unknown>
  data?:any
  state?: any
}
