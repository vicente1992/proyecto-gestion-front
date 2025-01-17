import { NgForOf, NgIf } from '@angular/common';
import { Component, ViewChild, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '@core/services/user.service';
import { Category } from '@features/posts/shared/model/category';
import { ImagePreview } from '@features/posts/shared/model/image-preview';
import { CategoryService } from '@features/posts/shared/services/category.service';
import { PostService } from '@features/posts/shared/services/post.service';
import { MAX_ALLOWED_FILES } from '@shared/constants/file';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-modal-create-post',
  templateUrl: './modal-create-post.component.html',
  styleUrls: ['./modal-create-post.component.scss'],
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule],
  providers: [CategoryService],
})
export class ModalCreatePostComponent {
  public dialogRef = inject(MatDialogRef);
  private userService = inject(UserService);
  private postService = inject(PostService);
  private categoryService = inject(CategoryService);
  @ViewChild('fileInput') fileInput: any;
  images: ImagePreview[] = [];
  formData = new FormData();
  text = new FormControl(null, [Validators.required]);
  title = new FormControl(null, [Validators.required]);
  categoryId = new FormControl(null, [Validators.required]);
  user = this.userService.userInfo;
  categories = signal<Category[]>([]);

  constructor() {
    this.userService.getCurrentUser();
    this.getCategories();
  }

  get isFormInvalid(): boolean {
    return this.text.invalid || !this.images.length;
  }

  async getCategories() {
    const posts = await firstValueFrom(this.categoryService.getCategories());
    this.categories.set(posts);
  }

  close() {
    this.dialogRef.close(true);
  }

  isMaxAllowedFiles(numberFile: number): boolean {
    return numberFile > MAX_ALLOWED_FILES;
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (this.isMaxAllowedFiles(files.length)) return;

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
    this.formData.append('content', `${this.text.value}`);
    this.formData.append('title', `${this.title.value}`);
    this.formData.append('categoryId', `${this.categoryId.value}`);
    this.postService.create(this.formData).subscribe(() => {
      this.close();
    });
  }

  private createImageObject(file: File, url: string): ImagePreview {
    return {
      file: file,
      url: url,
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
    this.formData.append('images', file);
  }
}
