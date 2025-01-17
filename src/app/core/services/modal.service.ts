import { Injectable, inject } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';
import { Observable, firstValueFrom } from 'rxjs';
import { ModalConfirmComponent } from '@core/components/modal-confirm/modal-confirm.component';

@Injectable()
export class ModalService {
  private dialog = inject(MatDialog);

  async confirm() {
    const dialogRef = this.dialog.open(ModalConfirmComponent);
    return await firstValueFrom(dialogRef.afterClosed());
  }

  openDialog(component: ComponentType<unknown>, data = {}) {
    const dialogRef = this.dialog.open(component, { data });
    return new Observable((observer) => {
      dialogRef.afterClosed().subscribe((response) => {
        if (response) {
          observer.next(response);
        }
        observer.complete();
      });
    });
  }
}
