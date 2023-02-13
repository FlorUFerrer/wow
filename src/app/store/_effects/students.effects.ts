// Angular
import { Injectable } from "@angular/core";
// RxJS
import { mergeMap, map, catchError } from "rxjs/operators";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  EMPTY, of } from "rxjs";
import {  Store } from "@ngrx/store";
// Services
import { FirestoreService } from "src/app/services/firestore.service";
import {  StudentsLoaded, StudentsLoading } from "../_actions/alumnos.actions";


@Injectable()
export class EstudentsEffects {
  
    
    constructor(
          private studentService: FirestoreService,
          private actions$: Actions,
      ) {}

     
  loadStudents$ = createEffect(() =>
      this.actions$.pipe(
        ofType("[Students] Students Loading"),
        mergeMap(() => this.studentService.getDataClients()
          .pipe(
            map(students => students.map(student => student.payload.doc.data())),
            map(students => ({type:  '[Students] Loaded Students' ,payload : students})),
            catchError(() => of({ type: '[Students] Loading Error' }))
          )
        )
      )
    );

}

