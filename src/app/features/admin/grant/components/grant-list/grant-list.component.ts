import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { ModalService } from '@core/services/modal.service';
import { Grant, GrantV } from '@shared/models/grant';
import { GrantFormComponent } from '../grant-form/grant-form.component';
import { GrantService } from '@shared/services/grant.service';

@Component({
  selector: 'app-grant-list',
  standalone: true,
  imports: [
    CommonModule,
    GrantFormComponent
  ],
  templateUrl: './grant-list.component.html',
  styleUrl: './grant-list.component.css',
})
export class GrantListComponent {
  grants = input.required<GrantV[]>();
  #modalService = inject(ModalService);
  #grantService = inject(GrantService);
  onLoad = output<void>();

  async deleteGrant(id: string) {
    const response = await this.#modalService.confirm();
    if (response) {
      this.delete(id);
    }
  }

  delete(id: string) {
    this.#grantService.delete(id)
      .subscribe(() => this.onLoad.emit());
  }


  openModal(data: GrantV) {
    this.#modalService.openDialog(GrantFormComponent, { ...data })
      .subscribe(() => this.onLoad.emit());
  }
}
