import { Component } from '@angular/core';
import { HeaderPostComponent } from '../header-post/header-post.component';

@Component({
    selector: 'app-posts-card',
    templateUrl: './posts-card.component.html',
    styleUrls: ['./posts-card.component.scss'],
    standalone: true,
    imports: [HeaderPostComponent]
})
export class PostsCardComponent {

}
