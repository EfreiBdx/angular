import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cocktail {
  url = 'http://localhost:12000/cocktails'

  constructor(private http: HttpClient){}

  getAllCocktails(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  getCocktail(cid: string): Observable<any>{
    return this.http.get<any>(this.url+"/"+cid)
  }

  addCocktail(cocktail: any): Observable<any>{
    return this.http.put(this.url, cocktail)
  }

  updateCocktail(cocktail: any): Observable<any>{
    return this.http.patch<any>(this.url+"/"+cocktail.id, cocktail)
  }

  trashCocktail(cid: number): Observable<any>{
    return this.http.delete<any>(this.url+"/trash/"+cid)
  }

  untrashCocktail(cid: number): Observable<any>{
    return this.http.post<any>(this.url+"/untrash/"+cid, {})
  }

  deleteCocktail(cid: string): Observable<any>{
    return this.http.delete(this.url+"/"+cid)
  }
}
