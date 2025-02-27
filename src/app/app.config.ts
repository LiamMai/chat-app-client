import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorS } from './core/interceptors/auth.interceptor';
import { BaseInterceptor } from './core/interceptors/base.interceptor';
import { provideAntIcons } from '@ant-design/icons-angular';
import {
  provideTanStackQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental'

registerLocaleData(en);
const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        staleTime: 5 * 1000 * 1000, // Default refresh time (5 mintues)
        refetchOnWindowFocus: true,
      },
    },

  }
);


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideNzI18n(en_US),
    importProvidersFrom([ReactiveFormsModule, FormsModule]),
    provideAnimationsAsync(),
    provideHttpClient(withFetch(), withInterceptors([]), withInterceptorsFromDi()),
    provideAntIcons([]),
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorS, multi: true },
    provideTanStackQuery(queryClient)
  ],
};
