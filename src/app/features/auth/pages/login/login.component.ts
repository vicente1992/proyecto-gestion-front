import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class LoginComponent {

  private router = inject(Router);


  goToFeed() {
    this.router.navigate(['/', 'posts'])
  }

}
