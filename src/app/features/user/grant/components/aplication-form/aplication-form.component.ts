import { DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UploadFileComponent } from '@shared/components/upload-file/upload-file.component';
import { Grant } from '@shared/models/grant';

@Component({
  selector: 'app-aplication-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    UploadFileComponent
  ],
  templateUrl: './aplication-form.component.html',
  styleUrl: './aplication-form.component.css',
})
export class AplicationFormComponent {
  @Inject(DIALOG_DATA) public data: Grant = inject(DIALOG_DATA);
  public dialogRef = inject(MatDialogRef);
  fileExtensions = signal<string[]>(['pdf']);
  form: FormGroup = new FormGroup({
    levelEducation: new FormControl(null, [Validators.required]),
    documentNumber: new FormControl(null, [Validators.required]),
    document: new FormControl(null, [Validators.required]),
    grantId: new FormControl(this.data._id),
  });


  onSubmit() {
    console.log(this.form.value);
  }

  onFile(document: string) {
    this.form.patchValue({ document });
  }
}
