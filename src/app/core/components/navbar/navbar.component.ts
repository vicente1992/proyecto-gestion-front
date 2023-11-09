import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '@core/services/user.service';
import { AuthService } from '@features/auth/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  private userService = inject(UserService);
  user = this.userService.userInfo;

  logout() {
    this.authService.logout().then(() => {
      // this.router.navigate(['/', 'auth', 'login']); 
      window.location.reload();
    });
  }
}
