import { Action } from '@ngrx/store';
import { createAction ,props } from '@ngrx/store';
import { StudentStore } from 'src/app/models/student.model';



export const StudentsLoading = createAction(
  "[Students] Students Loading",
);

export const StudentsLoaded = createAction(
  '[Students] Loaded Students',
  props<{students : StudentStore[]}>()
);

export const StudentError = createAction(
  "[Students] Students Error",
);

