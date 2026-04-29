import {provideTranslateService, TranslateService} from '@ngx-translate/core';
import {provideTranslateHttpLoader} from '@ngx-translate/http-loader';
import {APP_INITIALIZER} from '@angular/core';
import {initTranslate} from './translate.init';

export const translateProvider =     provideTranslateService({
    loader: provideTranslateHttpLoader({
      prefix: '/assets/i18n/',
      suffix: '.json'
    }),
    fallbackLang: 'en',
    lang: 'en'
  })

export const  translateInitProvider =
  {
    provide: APP_INITIALIZER,
    useFactory: initTranslate,
    deps: [TranslateService],
    multi: true
  }
