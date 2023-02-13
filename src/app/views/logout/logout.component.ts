import { Component, Input, OnInit } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  userName : Observable<any>;
  constructor(public afAuth: AngularFireAuth ,
    public router: Router) {  }

 
  tituloLogout :string = "Logout"; 
  inGoogle :boolean;

  
  signOut(){
    this.afAuth.signOut();
    this.router.navigate(['']);
  }
  
  getUserName(){
   this.userName = this.afAuth.authState
   .pipe(
    map( (name :any)=> name._delegate.displayName )
   )
  }

  ngOnInit(): void {
   
    this.getUserName();  
      
  }

}
