import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsCardComponent } from './components/posts-card/posts-card.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { MostPopularComponent } from './components/most-popular/most-popular.component';


@NgModule({
  declarations: [
    PostsComponent,
    CreatePostComponent,
    PostsCardComponent,
    CardInfoComponent,
    MostPopularComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
