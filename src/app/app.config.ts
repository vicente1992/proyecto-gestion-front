import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideCore } from '@core/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { JwtInterceptor } from '@core/interceptors/jwt.interceptor';
import { ErrorHandlerInterceptor } from '@core/interceptors/error-handle.interceptor';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';

registerLocaleData(localEs, 'es');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    provideCore(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom([BrowserModule, MatDialogModule]),
    provideHttpClient(
      withInterceptors([JwtInterceptor, ErrorHandlerInterceptor])
    ),
    provideAnimations(),
  ],
};
