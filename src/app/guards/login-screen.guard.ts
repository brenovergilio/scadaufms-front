import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../components/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginScreenGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuthenticated = this.authService.isAuthenticated();

      if(isAuthenticated) {
        this.router.navigate(['/']);
        return false;
      }  
   
      return true;
  }
  
}
