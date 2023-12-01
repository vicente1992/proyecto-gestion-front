import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Post } from '../model/post';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PostService extends HttpService {

  private apiUrl = environment.apiUrl;

  getPosts(): Observable<Post[]> {
    return this.doGet<Post[]>(`${this.apiUrl}/posts`);
  }

  create(formData: FormData): Observable<any> {
    return this.doPost<any>(`${this.apiUrl}/posts`, formData);
  }

}
