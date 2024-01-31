import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiAdminUrl = 'https://hoadv-nodejs.vercel.app/students'; // khai bao apiUrl
  http = inject(HttpClient); // inject bien http

  getUserListAdmin(searchText = '', page = 1): Observable<UserResponse> {
    // const apiUrl = searchText
    //   ? `${this.apiAdminUrl}?search=${searchText}`
    //   : this.apiAdminUrl;
    // const apiUrl = page ? `${this.apiAdminUrl}?page=${page}` : this.apiAdminUrl;
    const apiUrl = `${this.apiAdminUrl}?search=${searchText}&page=${page}`;
    return this.http.get<UserResponse>(apiUrl);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.apiAdminUrl}/${id}`);
  }
}