import { Injectable, inject } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from '@environments/environment.development';
import { AuthResponse } from '../models/auth';
import { Observable, tap, } from 'rxjs';
import { LocalStorageService } from '@core/services/local-storage.service';
import { AuthStorage } from '../models/auth-storage.enum';


@Injectable()
export class AuthService extends HttpService {
  private apiTenant = environment.apiUrl;
  private storageService = inject(LocalStorageService);

  login(body: any): Observable<AuthResponse> {
    return this.doPost<AuthResponse>(`${this.apiTenant}/auth/login`, body)
      .pipe(
        tap((data) => {
          this.setUserInfo(data);
        })
      );
  }

  register(body: any): Observable<AuthResponse> {
    return this.doPost<AuthResponse>(`${this.apiTenant}/auth/register`, body)
      .pipe(
        tap((data) => {
          this.setUserInfo(data);
        })
      );
  }

  refresh(): Observable<AuthResponse> {
    return this.doGet<AuthResponse>(`${this.apiTenant}/auth/refresh`)
      .pipe(
        tap((data) => {
          this.setUserInfo(data);
        })
      );
  }

  setUserInfo({ user, token }: AuthResponse) {
    this.storageService.setItem(AuthStorage.USER, JSON.stringify(user));
    this.storageService.setItem(AuthStorage.TOKEN, token);
  }

  public logout() {
    return new Promise((resolve) => {
      this.storageService.clear();
      resolve(true);
    });
  }

}
