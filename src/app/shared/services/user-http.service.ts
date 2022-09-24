import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserHttp {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private httpClient: HttpClient, private router : Router) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
}

login(username, password) {
    return this.httpClient.post<User>(`${environment.baseURL}/users/login`, { username, password })
        .pipe(map(user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
}

logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/home']);
}

register(user: User) {
    return this.httpClient.post(`${environment.baseURL}/users`, user);
}

getAll() {
    return this.httpClient.get<User[]>(`${environment.baseURL}/users`);
}

getById(id: string) {
    return this.httpClient.get<User>(`${environment.baseURL}/users/id=${id}`);
}

update(id, params) {
    return this.httpClient.put(`${environment.baseURL}/users/${id}`, params)
        .pipe(map(x => {
            // update stored user if the logged in user updated their own record
            if (id == this.userValue.id) {
                // update local storage
                const user = { ...this.userValue, ...params };
                localStorage.setItem('user', JSON.stringify(user));

                // publish updated user to subscribers
                this.userSubject.next(user);
            }
            return x;
        }));
}

delete(id: string) {
    return this.httpClient.delete(`${environment.baseURL}/users/${id}`)
        .pipe(map(x => {
            // auto logout if the logged in user deleted their own record
            if (id == this.userValue.id) {
                this.logout();
            }
            return x;
        }));
}

}
