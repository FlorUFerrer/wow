import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminUserComponent } from '../../pages/admin-user/admin-user.component';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.scss']
})
export class RegistrerComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public afAuth: AngularFireAuth ,
    public router: Router
  ) { }

  registrerUser(){
    this.dialog.open(AdminUserComponent); 
    
  }
  ngOnInit(): void {
  }

}
