import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserResponse } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // register(user: User) {
  //   throw new Error('Method not implemented.');
  // }
  register(user:any):Observable<User>{
    // return data.find(item => item.id == id)
    return this.http.post<User>(`${this.apiAdminUrl}/signup`,user)
  }
  apiAdminUrl = 'https://hoadv-nodejs.vercel.app/students'; // khai bao apiUrl
  http = inject(HttpClient); // inject bien http

  constructor() {}

  getUserListAdmin(seacrh?: string): Observable<UserResponse> {
    const apiUrl = seacrh
      ? `${this.apiAdminUrl}?search=${seacrh}`
      : this.apiAdminUrl;
    return this.http.get<UserResponse>(apiUrl); //axios.get(apiUrl)
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.apiAdminUrl}/${id}`);
  }
}