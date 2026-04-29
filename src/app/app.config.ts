import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient} from '@angular/common/http';
import {provideTranslateService, TranslateService} from '@ngx-translate/core';

import {provideTranslateHttpLoader} from '@ngx-translate/http-loader';
import {initTranslate} from './core/config/translate/translate.init';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideHttpClient(),

    provideRouter(routes),

    provideClientHydration(withEventReplay()),

    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json'
      }),
      fallbackLang: 'en',
      lang: 'en'
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslate,
      deps: [TranslateService],
      multi: true
    }
  ]
};

