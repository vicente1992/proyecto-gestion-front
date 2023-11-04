import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsCardComponent } from './components/posts-card/posts-card.component';


@NgModule({
  declarations: [
    PostsComponent,
    CreatePostComponent,
    PostsCardComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
