import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Observable } from 'rxjs';
import { Category, CategoryAdd, CategoryAdmin } from '../types/Category';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiAdminUrl = 'https://hoadv-nodejs.vercel.app/categories'; // khai bao apiUrl
  // API_URL = 'http://localhost:3000'
  http = inject(HttpClient); // inject bien http

  constructor() {}

  getCategoryListAdmin(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiAdminUrl); //axios.get(apiUrl)
    }

    createCategory(categories: CategoryAdd) {
      return this.http.post<Category>(this.apiAdminUrl, categories);
    }
    deleteCategoryById(id: string) {
      return this.http.delete(`${this.apiAdminUrl}/${id}`);
    }
    updateCategoryById(categories: CategoryAdd, id: string) {
      return this.http.put<Category>(`${this.apiAdminUrl}/${id}`, categories);
    }
    getDetailCategoryById(id: string) {
      return this.http.get<CategoryAdmin>(`${this.apiAdminUrl}/${id}`);
    }
}