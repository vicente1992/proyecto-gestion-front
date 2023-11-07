import { Injectable, inject } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable()
export class ModalService {
  private dialog = inject(MatDialog);

  openDialog(component: ComponentType<unknown>, data: any = null) {
    const dialogRef = this.dialog.open(component, { data, });
    return new Observable((observer) => {
      dialogRef.afterClosed().subscribe((response) => {
        if (response) {
          observer.next(response);
        }
        observer.complete();
      })

    });
  }

}
