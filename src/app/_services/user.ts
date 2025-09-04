import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IDataUser, ISingleUser, IUser } from '../_interfaces/user';
import { IApi } from '../_interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class User {
  url = environment.urlAPIUser

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IDataUser> {
    return this.http.get<IDataUser>(this.url)
  }

  getUser(uid: string): Observable<ISingleUser> {
    return this.http.get<ISingleUser>(this.url + '/' + uid)
  }

  addUser(user: IUser): Observable<IApi> {
    return this.http.put<IApi>(this.url, user)
  }

  updateUser(user: IUser): Observable<IApi> {
    return this.http.patch<IApi>(this.url + "/" + user.id, user)
  }

  trashUser(uid: number | undefined): Observable<IApi> {
    return this.http.delete<IApi>(this.url + "/trash/" + uid)
  }

  untrashUser(uid: number | undefined): Observable<IApi> {
    return this.http.post<IApi>(this.url + "/untrash/" + uid, {})
  }

  deleteUser(uid: number | undefined): Observable<IApi> {
    return this.http.delete<IApi>(this.url + "/" + uid)
  }
}
