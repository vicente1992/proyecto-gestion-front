import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterLinkActive } from '@angular/router';
import { AuthService } from '@features/auth/shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  #router = inject(Router);
  #authService = inject(AuthService);

  menu: Array<any> = [
    {
      path: ['/', 'admin', 'grant'],
      icon: 'ri-school-line',
      tooltip: 'Estadisticas',
      roles: [],
    },
    {
      path: ['/', 'user', 'grant'],
      icon: 'ri-school-line',
      tooltip: 'Estadisticas',
      roles: [],
    },

    // <i class="ri-school-line"></i>

    // <i class="ri-school-line"></i>

  ];

  logout() {
    this.#authService.logout().then(() => {
      this.#router.navigate(['/', 'auth', 'login']);
    });
  }
}
