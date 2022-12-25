import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { Subjetcs } from 'src/app/models/subjects.model';
import { Student } from 'src/app/models/students.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss'],
})
export class EditTableComponent implements OnInit {
  @Input() formProduct$: Observable<any>;
  getAllClient$: Observable<any>;
  IdDocument$: Observable<any>;
  clientId$: Observable<any>;
  nameGateway: any;

  description: string;
  lastname: string;
  subject_id: string;
  name: string;
  note: string;
  id:string;

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl(''),
    subject_id: new FormControl('', Validators.required),
    description: new FormControl(''),
    note: new FormControl(''),
  });

  constructor(
    public firestoreService: FirestoreService,
    public dialogRef: MatDialogRef<EditTableComponent>,
    @Inject(MAT_DIALOG_DATA) data: Student
  ) {
     this.description = data.description;
     this.subject_id = data.subject_id;
     this.name = data.name;
     this.lastname = data.lastname;
     this.note = data.note;
     this.id = data.id;
  }

  // get client's name
  getData() {
    this.getAllClient$ = this.firestoreService.getNamesClients().pipe(
      map((names: Student[]) =>
        names.map((name: any) => {
          let arrCLient = {
            id: name.payload.doc.id,
            name: name.payload.doc.data().name,
          };
          return arrCLient;
        })
      )
    );
  }

  // get name's client_id
  getName(subject_id: string) {
    this.clientId$ = this.firestoreService.getNamesClients().pipe(
      map((names: any[]) => {
        let findName = names
          .map((name) => {
            let arrName = {
              id: name.payload.doc.id,
              name: name.payload.doc.data().name,
            };
            return arrName;
          })
          .find(({ id }) => {
            return id === subject_id;
          });
        return findName?.id;
      })
    );
  }



  updateRegisterForm(form: Event) {
   form.preventDefault();
   this.firestoreService.updateClient(this.registerForm.value, this.id);
   this.dialogRef.close();
   this.registerForm.reset();
  }
  ngOnInit(): void {
    this.getData();
    this.getName(this.subject_id);

  }
}
