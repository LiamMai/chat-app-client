import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Router } from '@angular/router';
import { LOCAL_STORE_KEY } from '../../shared/constants';
import ROUTES from '../../shared/constants/routes';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) { }

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }

  canLoad(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    const accessToken = localStorage.getItem(LOCAL_STORE_KEY.ACCESS_TOKEN)
    console.log("🚀 ~ AuthGuard ~ checkAuth ~ accessToken:", accessToken)

    if (!accessToken) {
      this.router.navigateByUrl(ROUTES.LOGIN);
      return false
    }

    return true

  }

}