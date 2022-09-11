import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';

export const AUTH_TOKEN_KEY = 'auth-token'
export const AUTH_USER_DATA = 'user-data'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(authData : User){
    sessionStorage.setItem(AUTH_TOKEN_KEY, authData.email + 'RANDOM_STRING')
    sessionStorage.setItem(AUTH_USER_DATA, JSON.stringify(authData))
    console.log(authData)
  }
}
