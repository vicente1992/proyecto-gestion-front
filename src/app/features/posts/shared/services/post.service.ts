import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Post } from '../model/post';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '@environments/environment.development';
import { MostPopular } from '../model/most-popular';

@Injectable({
  providedIn: 'root',
})
export class PostService extends HttpService {
  private _hasNewPost$ = new BehaviorSubject<Post | undefined>(undefined);
  private apiUrl = environment.apiUrl;

  get hasNewPost$() {
    return this._hasNewPost$.asObservable();
  }

  getPosts(): Observable<Post[]> {
    return this.doGet<Post[]>(`${this.apiUrl}/posts`);
  }

  getMostPopular(): Observable<MostPopular[]> {
    return this.doGet<MostPopular[]>(`${this.apiUrl}/posts/most-popular`);
  }

  create(formData: FormData): Observable<any> {
    return this.doPost<any>(`${this.apiUrl}/posts`, formData).pipe(
      tap((response) => this._hasNewPost$.next(response))
    );
  }

  delete(id: string) {
    return this.doDelete<any>(`${this.apiUrl}/posts/${id}`).pipe(
      tap((response) => this._hasNewPost$.next(response))
    );
  }
}
