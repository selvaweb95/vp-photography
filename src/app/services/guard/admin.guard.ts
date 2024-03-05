import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token') && localStorage.getItem('role')=="1") { 
    return true;
  }
  inject(Router).navigateByUrl('/home');
  return false
};
