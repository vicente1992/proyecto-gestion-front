import { Injectable, effect, inject, signal } from '@angular/core';
import { User } from '@features/auth/shared/models/user';
import { LocalStorageService } from './local-storage.service';
import { AuthStorage } from '@features/auth/shared/models/auth-storage.enum';

@Injectable()
export class UserService {
  private storageService = inject(LocalStorageService);
  private _user = signal<User | null>(null);

  constructor() {
    const user = this.currentUser();
    this._user.set(user);
  }

  get userInfo() {
    return this._user;
  }

  isLoggedIn() {
    return !!this.storageService.getItem(AuthStorage.TOKEN);
  }

  currentUser(): User | null {
    const user = this.storageService.getItem(AuthStorage.USER) ?? null;
    return user ? JSON.parse(user) : null;
  }

}
