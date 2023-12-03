import { NgForOf } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MostPopular } from '@features/posts/shared/model/most-popular';
import { PostService } from '@features/posts/shared/services/post.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss'],
  imports: [NgForOf],
  standalone: true,
})
export class MostPopularComponent implements OnInit {
  private postService = inject(PostService);
  mostsPopulars = signal<MostPopular[]>([]);

  ngOnInit(): void {
    this.getMostPopular();
  }

  async getMostPopular() {
    const data = await firstValueFrom(this.postService.getMostPopular());
    this.mostsPopulars.set(data);
  }
}
