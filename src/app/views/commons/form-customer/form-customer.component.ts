import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Subjetcs } from 'src/app/models/subjects.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { eventNames } from 'process';
import { arrayRemove } from 'firebase/firestore';
@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.scss'],
})
export class FormCustomerComponent implements OnInit {
  getClient$: Observable<any>;
  nameCienteId$ :Observable<any>;

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl(''),
    subject_id: new FormControl('', Validators.required),
    description: new FormControl(''),
    note: new FormControl(''),
    
  });
  router: any;


  constructor(
    public firestoreService: FirestoreService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<FormCustomerComponent>
  ) {}

  // get client's name
  getData() {
    this.getClient$ = this.firestoreService.getNamesClients().pipe(
      map((names: Subjetcs[]) =>
        names.map((name: any) => {
          return name.payload.doc;
        })
      )
    );
  }

  // get Id and name - "None"
  getIdNone(){
    this.nameCienteId$ = this.firestoreService.getNamesClients().pipe(
      map((names: any[]) => {
       let findName = names.map( name => {
          let arrName = {
            "id" :name.payload.doc.id,
            "name": name.payload.doc.data().name,
          }
          return arrName
        })
      .find(( {name}) => {
             return name === 'None'
          })
         return findName?.id
      }),
    )
  }

// register form
  getRegisterForm(form: Event) {
    form.preventDefault();
    this.firestoreService.createClient(this.registerForm.value);
    this.dialogRef.close()
    this.registerForm.reset()
  }

  ngOnInit(): void {
    this.getIdNone();
    this.getData();
  }
}
