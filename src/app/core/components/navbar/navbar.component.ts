import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '@core/services/user.service';
import { AuthService } from '@features/auth/shared/services/auth.service';
import { UserAvatarComponent } from '@shared/components/user-avatar/user-avatar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, UserAvatarComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  public isLoggedIn = inject(UserService).isLoggedIn();


  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/', 'auth', 'login']);
    });
  }
}
