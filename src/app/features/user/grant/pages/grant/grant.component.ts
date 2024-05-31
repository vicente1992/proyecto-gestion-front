import { CommonModule } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardGrantComponent } from '@shared/components/card-grant/card-grant.component';
import { Grant } from '@shared/models/grant';
import { GrantService } from '@shared/services/grant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grant',
  standalone: true,
  imports: [
    CommonModule,
    CardGrantComponent
  ],
  templateUrl: './grant.component.html',
  styleUrl: './grant.component.css',
})
export default class GrantComponent {
  grantService = inject(GrantService);

  #grants$: Observable<Grant[]> = this.grantService.getGrants();

  grants: Signal<Grant[]> = toSignal(this.#grants$, { initialValue: [] });

}
