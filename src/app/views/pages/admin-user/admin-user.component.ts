import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {



  value = '';
  name: string;
  password: string;
  loging$ :Observable<any>;
  login :any;
  adminForm = new FormGroup({
     name: new FormControl('', Validators.required),
     password: new FormControl('', Validators.required),
   });
 
  
 
  constructor( public firestoreService: FirestoreService ,
    public dialogRef: MatDialogRef<AdminUserComponent>,
    public router: Router) { }

   adminLogin(form: Event) {
    form.preventDefault();
    this.checkAdmin(this.adminForm.value.name as string ,this.adminForm.value.password as string);
    this.dialogRef.close();
    this.adminForm.reset();
    this.router.navigate(['alumnos']);    
  }

  
  checkAdmin( userName: string ,pass :string){
    this.loging$ = this.firestoreService.getDataUser().pipe(
      map( (user:any)=> user.map ((name:any)=> {

        let user = {
          name : name.payload.doc.data().name,
          password: name.payload.doc.data().password,
        }
         if ( user.name === userName && user.password === pass){
         return true  
        }else {
          return  false
        }
      }
      )))
  }
  

  ngOnInit(): void {
   
  }

}
