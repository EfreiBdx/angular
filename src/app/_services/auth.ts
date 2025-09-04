import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICredential } from '../_interfaces/credential';
import { Observable } from 'rxjs';
import { IToken } from '../_interfaces/token';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class Auth {
  // url = 'http://localhost:12000/auth/login'
  url = environment.urlAPIAuth

  constructor(private http: HttpClient){}

  login(credentials: ICredential): Observable<IToken>{
    return this.http.post<IToken>(this.url, credentials)
  }
}
