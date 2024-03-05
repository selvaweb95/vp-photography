import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  
  if (localStorage.getItem('token') && localStorage.getItem('role')=="2") { 
    return true;
  }
  inject(Router).navigateByUrl('/home');
  return false
};
