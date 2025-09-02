import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Token } from '../_services/token';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = inject(Token)


  if(token.isLogged()){
    return true
  }

  router.navigate(['/auth/login']);
  return false
};
