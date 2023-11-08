import { NgForOf, NgIf } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ImagePreview } from '@features/posts/shared/model/image-preview';
import { MAX_ALLOWED_FILES } from '@shared/constants/file';



@Component({
  selector: 'app-modal-create-post',
  templateUrl: './modal-create-post.component.html',
  styleUrls: ['./modal-create-post.component.scss'],
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule]
})
export class ModalCreatePostComponent {
  public dialogRef = inject(MatDialogRef);
  @ViewChild('fileInput') fileInput: any;
  images: ImagePreview[] = [];
  formData = new FormData();
  text = new FormControl(null, [Validators.required]);

  get isFormInvalid(): boolean {
    return this.text.invalid || !this.images.length
  }

  close() {
    this.dialogRef.close(true);
  }


  isMaxAllowedFiles(numberFile: number): boolean {
    return numberFile > MAX_ALLOWED_FILES
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (this.isMaxAllowedFiles(files.length)) return

    this.processFiles(files);

  }


  removeImage(index: number) {
    this.images.splice(index, 1);
  }

  displayImagePreview(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const image = this.createImageObject(file, event.target.result);
      this.addImageToCollection(image);
    };

    reader.readAsDataURL(file);
  }

  createPost() {
    const { value } = this.text
    this.formData.append('text', `${value}`,);

    console.log(this.formData.get('images'));
  }

  private createImageObject(file: File, url: string): ImagePreview {
    return {
      file: file,
      url: url
    };
  }

  private addImageToCollection(image: ImagePreview): void {
    this.images.push(image);
  }

  private resetFileInput() {
    this.fileInput.nativeElement.value = '';
  }


  private processFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.appendFileToFormData(file);
      this.displayImagePreview(file);
    }

    this.resetFileInput();
  }

  private appendFileToFormData(file: File) {
    this.formData.append('images[]', file, file.name);
  }


}
