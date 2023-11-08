import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Post } from '@features/posts/shared/model/post';

@Component({
  selector: 'app-header-post',
  templateUrl: './header-post.component.html',
  styleUrls: ['./header-post.component.scss'],
  standalone: true,
  imports: [DatePipe]
})
export class HeaderPostComponent {
  @Input({ required: true }) post!: Post

}
