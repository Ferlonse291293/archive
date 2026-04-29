import { TranslateService } from '@ngx-translate/core';
import {firstValueFrom} from 'rxjs';

export function initTranslate(translate: TranslateService) {
  return () => {
    let lang = 'en';

    if (typeof window !== 'undefined') {
      const browserLang = navigator.language?.split('-')[0];
      if (browserLang) {
        lang = browserLang;
      }
    }

    translate.setDefaultLang('en');
    return firstValueFrom(translate.use(lang));
  };
}
