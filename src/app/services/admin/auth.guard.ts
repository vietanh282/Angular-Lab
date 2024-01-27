import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    // private productService: ProductService,
    private route:Router,
    // private activatedRoute: ActivatedRoute
    ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log(user.user.id);
    
    if (Number(user.user.id) == 10) {
      return true
    }else{
      return this.route.navigateByUrl('')
    }

  
  }
  
}