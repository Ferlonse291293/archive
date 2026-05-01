import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {stateProvider} from './state/state.provider';
import {translateInitProvider, translateProvider} from './core/config/translate/translate.provider';
import {dataProvider} from './core/data/data.provider';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

    provideHttpClient(withInterceptors(dataProvider)),

    provideRouter(routes),

    provideClientHydration(withEventReplay()),

    translateProvider,
    translateInitProvider,
    stateProvider,


  ]
};

