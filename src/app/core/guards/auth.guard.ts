import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@core/services/user.service';
import { AuthService } from '@features/auth/shared/services/auth.service';
import { firstValueFrom } from 'rxjs';

export const AuthGuard = async () => {
  const service = inject(UserService);
  const authService = inject(AuthService);
  const router = inject(Router);
  if (service.isLoggedIn()) {
    await firstValueFrom(authService.refresh());
  }
  return service.isLoggedIn() ? service.isLoggedIn() : router.navigate(['/', 'auth', 'login']);
};

