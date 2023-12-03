import { Component, Inject, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '@features/posts/shared/services/category.service';
import { Rating } from '@features/posts/shared/model/rating';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-modal-rating',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './modal-rating.component.html',
  styleUrl: './modal-rating.component.scss',
  providers: [CategoryService],
})
export class ModalRatingComponent implements OnInit {
  @Inject(DIALOG_DATA) public data: { categoryId: string } =
    inject(DIALOG_DATA);
  public dialogRef = inject(MatDialogRef);
  public categoryService = inject(CategoryService);
  ratings = signal<Rating[]>([]);

  ngOnInit(): void {
    const { categoryId } = this.data;
    if (categoryId) {
      this.getRatingByCategory();
    }
  }

  async getRatingByCategory() {
    const posts = await firstValueFrom(
      this.categoryService.getRatingByCategory(this.data.categoryId)
    );
    this.ratings.set(posts);
  }
}
