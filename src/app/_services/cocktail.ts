import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICocktail, IDataCocktail, ISingleCocktail } from '../_interfaces/cocktail';
import { IApi } from '../_interfaces/api';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Cocktail {
  // url = 'http://localhost:12000/cocktails'
  url = environment.urlAPICkt

  constructor(private http: HttpClient){}

  getAllCocktails(): Observable<IDataCocktail>{
    return this.http.get<IDataCocktail>(this.url)
  }

  getCocktail(cid: string): Observable<ISingleCocktail>{
    return this.http.get<ISingleCocktail>(this.url+"/"+cid)
  }

  addCocktail(cocktail: ICocktail): Observable<IApi>{
    return this.http.put<IApi>(this.url, cocktail)
  }

  updateCocktail(cocktail: ICocktail): Observable<IApi>{
    return this.http.patch<IApi>(this.url+"/"+cocktail.id, cocktail)
  }

  trashCocktail(cid: number | undefined): Observable<IApi>{
    return this.http.delete<IApi>(this.url+"/trash/"+cid)
  }

  untrashCocktail(cid: number | undefined): Observable<IApi>{
    return this.http.post<IApi>(this.url+"/untrash/"+cid, {})
  }

  deleteCocktail(cid: number | undefined): Observable<IApi>{
    return this.http.delete<IApi>(this.url+"/"+cid)
  }
}
