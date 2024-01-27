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
    return this.http.post<User>(`${this.API_URL}/login`,user)
  }
  login(user:any):Observable<User>{
    
    return this.http.post<User>(`${this.API_URL}/signin`,user)
  
}
  API_URL = 'http://localhost:3000' // khai bao apiUrl
  http = inject(HttpClient); // inject bien http

  constructor() {}

  getUserListAdmin(seacrh?: string): Observable<UserResponse> {
    const apiUrl = seacrh
      ? `${this.API_URL}?search=${seacrh}`
      : this.API_URL;
    return this.http.get<UserResponse>(apiUrl); //axios.get(apiUrl)
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}