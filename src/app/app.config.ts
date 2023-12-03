import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideCore } from '@core/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { JwtInterceptor } from '@core/interceptors/jwt.interceptor';
import { ErrorHandlerInterceptor } from '@core/interceptors/error-handle.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideCore(),
    provideRouter(routes),
    importProvidersFrom([HttpClientModule, BrowserModule, MatDialogModule]),
    provideHttpClient(
      withInterceptors([JwtInterceptor, ErrorHandlerInterceptor])
    ),
    provideAnimations(),
  ],
};
