import { NgOptimizedImage } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ModalService } from '@core/services/modal.service';
import { Post } from '@features/posts/shared/model/post';
import { PostService } from '@features/posts/shared/services/post.service';

@Component({
  selector: 'app-header-post',
  templateUrl: './header-post.component.html',
  styleUrls: ['./header-post.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage],
})
export class HeaderPostComponent {
  @Input({ required: true }) post!: Post;
  private modalService = inject(ModalService);
  private postService = inject(PostService);

  async deletePost(id: string) {
    const response = await this.modalService.confirm();
    if (response) {
      this.delete(id);
    }
  }

  delete(id: string) {
    this.postService.delete(id).subscribe();
  }
}
