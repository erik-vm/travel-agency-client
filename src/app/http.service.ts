import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}


  //User related operations

  //Log in

  //Register
  addNewUser(user: User): Observable<unknown>{
    return this.http.post(`${this.baseUrl}/users`, user)
  }

}
