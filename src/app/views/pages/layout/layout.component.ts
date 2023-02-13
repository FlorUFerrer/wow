import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  userName: Observable<any>;
  userPhoto: Observable<any>;
login :boolean =true;

  constructor(public afAuth: AngularFireAuth ,
    public router: Router) {  }

  getUserName(){
    this.userName = this.afAuth.authState
    .pipe(
      map( (name :any)=> name._delegate.displayName )
    )
  }

  getUserPhoto(){
    this.userPhoto = this.afAuth.authState
    .pipe(
      map( (name :any)=> name._delegate.photoURL
      
      )
    )
  }

    
  ngOnInit(): void {
    this.getUserName();
    this.getUserPhoto();
  }

}
