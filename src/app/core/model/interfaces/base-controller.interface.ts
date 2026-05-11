import {IBaseSection} from './base-section.interface';

export interface IBaseController {
  sections: Record<string, IBaseSection>
  params: unknown
  preInit()
  init()
  destroy()
}
