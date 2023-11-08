import { Component, Input } from '@angular/core';
import { HeaderPostComponent } from '../header-post/header-post.component';
import { Post } from '@features/posts/shared/model/post';
import { formatDistanceToNowStrict } from 'date-fns';
import es from 'date-fns/locale/es';

function formatDate(post: Post): Post {
    return {
        ...post,
        createdAt: formatDistanceToNowStrict(
            new Date(post.createdAt),
            { locale: es, addSuffix: true }
        )
    };
};


@Component({
    selector: 'app-posts-card',
    templateUrl: './posts-card.component.html',
    styleUrls: ['./posts-card.component.scss'],
    standalone: true,
    imports: [HeaderPostComponent]
})
export class PostsCardComponent {
    @Input({ required: true, transform: formatDate }) post!: Post
}
