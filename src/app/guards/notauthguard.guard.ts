import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class NotauthguardGuard implements CanActivate {
  constructor(private api: ApiService, private router: Router) {
    
  }
  canActivate(arss: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.api.isLoggedIn()) {
      this.router.navigate(["/feeds"]);
      return false;
    }
    return true;
  }
}
