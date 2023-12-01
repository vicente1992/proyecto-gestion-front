import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ModalService } from '@core/services/modal.service';
import { UserService } from '@core/services/user.service';
import { AuthService } from '@features/auth/shared/services/auth.service';
import { ModalCreatePostComponent } from '@features/posts/components/modal-create-post/modal-create-post.component';
import { UserAvatarComponent } from '@shared/components/user-avatar/user-avatar.component';
import { RolesDirective } from '@shared/directives/roles.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, UserAvatarComponent, RolesDirective],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  private modalService = inject(ModalService);
  public isLoggedIn = inject(UserService).isLoggedIn();


  openModal() {
    this.modalService.openDialog(ModalCreatePostComponent)
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/', 'auth', 'login']);
    });
  }
}
