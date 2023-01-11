import { Component } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth ,
    public router: Router) {  }
  title = 'alumnos';


// signIn(){
//   this.afAuth.signInWithPopup(new GoogleAuthProvider());

// }

// signOut(){
//   this.afAuth.signOut();
// }




}
