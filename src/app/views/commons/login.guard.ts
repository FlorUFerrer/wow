import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({

    providedIn: 'root'
  
  })
  
  export class AuthGuard implements CanActivate {
  
   
  
    constructor(public afAuth: AngularFireAuth ,
  
                 public router: Router) {}
  
    async canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Promise<boolean | UrlTree >{
  
   const user = await this.afAuth.currentUser;
   const isAuth = user ? true : false;
  
        if (!isAuth) {
             this.router.navigate(['']);
         
        }
  
        return isAuth;
  
    }
  
  }