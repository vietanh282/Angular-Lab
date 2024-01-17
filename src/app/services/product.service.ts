import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Product, ProductAdd, ProductAdmin } from '../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // call api
  apiUrl = 'https://fakestoreapi.com/products'; // khai bao apiUrl
  apiAdminUrl = 'https://hoadv-nodejs.vercel.app/api/products'; //api admin
  http = inject(HttpClient); // inject bien http
  constructor() {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl); //axios.get(apiUrl)
  }
  getProductListAdmin(): Observable<ProductAdmin[]> {
    return this.http.get<ProductAdmin[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }
  // removeProduct(id:number) {
  //   return this.http.delete(`https://hoadv-nodejs.vercel.app/api/products/${id
  // }`)
  // }
  getProductDetail(id: number) {
    return this.http.get<Product>('http://localhost:3000/products/' + id);
  }
  deleteProductById(id: string) {
    return this.http.delete(`${this.apiAdminUrl}/${id}`);
  }

  createProduct(product: ProductAdd) {
    return this.http.post<Product>(this.apiAdminUrl, product);
  }
  updateProduct(productId: number, product: ProductAdd) {
    return this.http.put<Product>(
      'http://localhost:3000/products/' + productId,
      product
    );
  }
}