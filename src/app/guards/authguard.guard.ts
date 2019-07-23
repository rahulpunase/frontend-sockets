import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { take, first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private api: ApiService, private router: Router) {

  }
  canActivate(arss: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    this.api.prevUrl = state.url;
    if(this.api.isLoggedIn()) {
      return true;
    } 
    //this.router.navigate(["authentication/login"]);
    this.router.navigate(["home"]);
    return false;
  }
}
