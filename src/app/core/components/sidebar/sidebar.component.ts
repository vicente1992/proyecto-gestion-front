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
      icon: 'ri-bar-chart-2-line',
      tooltip: 'Estadisticas',
      roles: [],
    },

  ];

  logout() {
    this.#authService.logout().then(() => {
      this.#router.navigate(['/', 'auth', 'login']);
    });
  }
}
