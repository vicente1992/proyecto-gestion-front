import { Component, computed, DestroyRef, inject, OnInit, Signal, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MostPopularComponent } from '@features/posts/components/most-popular/most-popular.component';
import { PostsCardComponent } from '@features/posts/components/posts-card/posts-card.component';
import { CreatePostComponent } from '@features/posts/components/create-post/create-post.component';
import { CardInfoComponent } from '@features/posts/components/card-info/card-info.component';
import { PostService } from '@features/posts/shared/services/post.service';
import { Post } from '@features/posts/shared/model/post';
import { Observable, tap } from 'rxjs';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  standalone: true,
  imports: [
    CardInfoComponent,
    CreatePostComponent,
    PostsCardComponent,
    MostPopularComponent,
    NgForOf,
  ],
})
export class PostsComponent implements OnInit {
  posts = signal<Post[]>([]);
  existsPost = computed(() => !!this.posts().length);
  private postService = inject(PostService);
  private readonly destroy: DestroyRef = inject(DestroyRef);


  ngOnInit(): void {
    // this.listenObserver();
    // this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .pipe(tap((posts) => this.posts.set(posts)))
      .subscribe()
  }

  private listenObserver() {
    this.postService.hasNewPost$
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((res) => {
        if (res) {
          this.getPosts();
        }
      });
  }
}
