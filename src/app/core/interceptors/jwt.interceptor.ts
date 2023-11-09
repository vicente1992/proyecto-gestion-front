import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpHandlerFn,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { LocalStorageService } from '@core/services/local-storage.service';
import { AuthStorage } from '@features/auth/shared/models/auth-storage.enum';
import { AuthService } from '@features/auth/shared/services/auth.service';
import { Router } from '@angular/router';

export const JwtInterceptor = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const storageService = inject(LocalStorageService);
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = storageService.getItem(AuthStorage.TOKEN);
  let request = req;

  if (token) {
    request = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
      },
    });
  }

  return next(request).pipe(
    catchError((httpErrorResponse: HttpErrorResponse) => {
      const { status, error } = httpErrorResponse;
      if (status === 401) {
        authService.logout().then(() => router.navigate(['/', 'auth', 'login']));
      }
      return throwError(() => error);
    })
  );
}
