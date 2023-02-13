import { Component, Input, OnInit } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
//import { setRedirectRoute } from 'src/app/store/routes.actions';
//import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  constructor(public afAuth: AngularFireAuth ,
    public router: Router ,
    // private store: Store
    ) {  }

  tituloLogin: string = "Login with Google"; 
  tituloLogout :string = "Logout"; 
  inGoogle :boolean;

 async signIn(){
  await  this.afAuth.signInWithPopup(new GoogleAuthProvider());
  //this.store.dispatch(setRedirectRoute({ route: '/alumnos' }));
  this.router.navigate(['alumnos']);
   // this.router.navigate(['alumnos']);
  }

  ngOnInit(): void {
      
  }

}
