import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}


  //User related operations

  //Log in
  logIn(userName: String, password: String):Observable<unknown>{
    return this.http.get(`${this.baseUrl}/users/${userName}`)
  }

  //Register
  addNewUser(user: User): Observable<unknown>{
    return this.http.post(`${this.baseUrl}/users`, user)
  }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUserById(id: number): Observable<unknown>{
    return this.http.post(`${this.baseUrl}/users/${id}`, id)
  }

}
