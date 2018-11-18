import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
      return this.http.get('//localhost:8080/userlist');
  }

  addUser(user: User): Observable<any> {
   return this.http.post('//localhost:8080/add', user);
  }

  getupdateUser(id: number): Observable<any> {
    return this.http.get('//localhost:8080/update/' + id);
  }

  updateUser(user: User): Observable<any> {
    return this.http.post('//localhost:8080/update', user);
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete('//localhost:8080/delete/' + user.id);
  }
}
