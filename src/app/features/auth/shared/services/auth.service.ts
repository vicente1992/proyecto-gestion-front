import { Injectable, inject } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from '@environments/environment.development';
import { AuthResponse } from '../models/auth';
import { Observable, tap, } from 'rxjs';
import { LocalStorageService } from '@core/services/local-storage.service';
import { AuthStore } from '@shared/store/Auth.store';


@Injectable()
export class AuthService extends HttpService {
  private apiTenant = environment.apiUrl;
  private storageService = inject(LocalStorageService);
  private authStore = inject(AuthStore);

  login(body: any): Observable<AuthResponse> {
    return this.doPost<AuthResponse>(`${this.apiTenant}/auth/login`, body)
      .pipe(tap((data) => this.authStore.setState(data)));
  }

  register(body: any): Observable<AuthResponse> {
    return this.doPost<AuthResponse>(`${this.apiTenant}/auth/register`, body)
      .pipe(tap((data) => this.authStore.setState(data)));
  }

  refresh(): Observable<AuthResponse> {
    return this.doGet<AuthResponse>(`${this.apiTenant}/auth/refresh`)
      .pipe(tap((data) => this.authStore.setState(data)));
  }
  public logout() {
    return new Promise((resolve) => {
      this.storageService.clear();
      resolve(true);
    });
  }

}
