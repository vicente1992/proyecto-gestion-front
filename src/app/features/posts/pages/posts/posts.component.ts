
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MostPopularComponent } from '@features/posts/components/most-popular/most-popular.component';
import { PostsCardComponent } from '@features/posts/components/posts-card/posts-card.component';
import { CreatePostComponent } from '@features/posts/components/create-post/create-post.component';
import { CardInfoComponent } from '@features/posts/components/card-info/card-info.component';
import { PostService } from '@features/posts/shared/services/post.service';
import { Post } from '@features/posts/shared/model/post';
import { firstValueFrom } from 'rxjs';
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
        NgForOf
    ]
})
export class PostsComponent implements OnInit {
    posts = signal<Post[]>([]);
    private PostService = inject(PostService);

    ngOnInit(): void {
        this.getPosts();
    }

    async getPosts() {
        const posts = await firstValueFrom(this.PostService.getPosts());
        this.posts.set(posts);
    }
}
