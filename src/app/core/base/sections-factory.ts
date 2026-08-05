
import {BaseSection, IBaseSection, ISectionConfig} from './base-section';
import {SectionsKey, SectionsKeys} from '../model/sections-keys.namespace';

export class SectionsFactory {
 static  createSections(sectionConfigs: ISectionConfig[]): Record<SectionsKey , IBaseSection>{
   let sections: Record<SectionsKey, IBaseSection> = {} as Record<SectionsKey, IBaseSection>;
    sectionConfigs.forEach(config => {
      sections[config.key] = this.createSection(config)
    })
   return sections
  }

 private static createSection(config: ISectionConfig): IBaseSection{
   return new BaseSection(config)
 }

}

