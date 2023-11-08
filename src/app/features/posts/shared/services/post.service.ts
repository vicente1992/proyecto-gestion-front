import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Post } from '../model/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService extends HttpService {

  private apiUrl = 'http://localhost:3000/api'

  getPosts(): Observable<Post[]> {
    return this.doGet<Post[]>(`${this.apiUrl}/posts`);
  }

}
