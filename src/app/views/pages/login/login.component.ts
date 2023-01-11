import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth ,
    public router: Router) {  }

  tituloLogin: string = "Login with Google"; 
  tituloLogout :string = "Logout"; 
  inGoogle :boolean;

 async signIn(){
  await  this.afAuth.signInWithPopup(new GoogleAuthProvider());
    this.router.navigate(['alumnos']);
  }
  
  signOut(){
    this.afAuth.signOut();
    this.router.navigate(['']);
  }
  

  ngOnInit(): void {
  }

}
