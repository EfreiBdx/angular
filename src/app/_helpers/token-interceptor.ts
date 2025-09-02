import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { Token } from '../_services/token';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(Token)

  // Si token présent clone de la requête et ajout du token dans l'entête
  if (tokenService.isLogged()) {
    const headers = new HttpHeaders({
      Authorization: "bearer " + tokenService.getToken()
    })

    const newReq = req.clone({
      headers
    })
    
    // Clone envoyé avec une gestion d'erreur préparée pour un token expiré
    return next(newReq).pipe(
      catchError(error => {
        console.log(error)

        if (error.status === 401) {
          tokenService.clearTokenExpired()
        }

        return throwError('Session Expired')
      })
    )
  }


  return next(req);
};
