import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { GrantListComponent } from '../../components/grant-list/grant-list.component';
import { FilterComponent } from '@shared/components/filter/filter.component';
import { ModalService } from '@core/services/modal.service';
import { GrantFormComponent } from '../../components/grant-form/grant-form.component';
import { GrantService } from '@shared/services/grant.service';
import { GrantV } from '@shared/models/grant';
import { tap } from 'rxjs';
import { PaginationComponent } from '@shared/components/pagination/pagination.component'; 

@Component({
  selector: 'app-grant',
  standalone: true,
  imports: [
    CommonModule,
    GrantListComponent,
    FilterComponent,
    GrantFormComponent,
    PaginationComponent
  ],
  templateUrl: './grant.component.html',
  styleUrl: './grant.component.css',
})
export default class GrantComponent implements OnInit {

  #modalService = inject(ModalService);
  #grantService = inject(GrantService);
  grants = signal<GrantV[]>([]);

  ngOnInit(): void {
    this.#getGrants();
  }

  #getGrants() {
    this.#grantService.getAll()
      .pipe(tap(grants => this.grants.set(grants)))
      .subscribe();
  }


  openModal() {
    this.#modalService.openDialog(GrantFormComponent)
      .subscribe(() => this.#getGrants())
  }

  onLoad() {
    this.#getGrants()
  }
}
