import {ISectionConfig} from '../model/interfaces/section-config.interface';
import {BaseSection} from './base-section';
import {IBaseSection} from '../model/interfaces/base-section.interface';
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

