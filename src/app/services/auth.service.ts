import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/User';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  register(user:any):Observable<User>{
    // return data.find(item => item.id == id)
    return this.http.post<User>(`${this.API_URL}/register`,user)
  }

  login(user:any):Observable<User>{
    
      return this.http.post<User>(`${this.API_URL}/login`,user)
    
  }
}