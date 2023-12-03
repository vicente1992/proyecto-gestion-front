import { Component, Input, inject } from '@angular/core';
import { HeaderPostComponent } from '../header-post/header-post.component';
import { Post } from '@features/posts/shared/model/post';
import { formatDistanceToNowStrict } from 'date-fns';
import es from 'date-fns/locale/es';
import { ModalService } from '@core/services/modal.service';
import { ModalRatingComponent } from '../modal-rating/modal-rating.component';

function formatDate(post: Post): Post {
  return {
    ...post,
    createdAt: formatDistanceToNowStrict(new Date(post.createdAt), {
      locale: es,
      addSuffix: true,
    }),
  };
}

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss'],
  standalone: true,
  imports: [HeaderPostComponent],
})
export class PostsCardComponent {
  @Input({ required: true, transform: formatDate }) post!: Post;
  private modalService = inject(ModalService);

  openModal(categoryId: string) {
    this.modalService.openDialog(ModalRatingComponent, { categoryId });
  }
}
