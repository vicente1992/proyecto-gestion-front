
import { Component } from '@angular/core';
import { MostPopularComponent } from '../../components/most-popular/most-popular.component';
import { PostsCardComponent } from '../../components/posts-card/posts-card.component';
import { CreatePostComponent } from '../../components/create-post/create-post.component';
import { CardInfoComponent } from '../../components/card-info/card-info.component';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    standalone: true,
    imports: [CardInfoComponent, CreatePostComponent, PostsCardComponent, MostPopularComponent]
})
export class PostsComponent {

}
