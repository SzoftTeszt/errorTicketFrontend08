import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const informatikusGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).getInformatikus()
};
