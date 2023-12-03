import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from '@environments/environment.development';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Rating } from '../model/rating';

@Injectable()
export class CategoryService extends HttpService {
  private apiUrl = environment.apiUrl;

  getCategories(): Observable<Category[]> {
    return this.doGet<Category[]>(`${this.apiUrl}/category`);
  }

  getRatingByCategory(categoryId: string): Observable<Rating[]> {
    return this.doGet<Rating[]>(
      `${this.apiUrl}/category/ratings/${categoryId}`
    );
  }
}
