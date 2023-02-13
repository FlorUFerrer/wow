import { Action, createReducer, on, props } from '@ngrx/store';
import { ExtendedStudent ,Student } from 'src/app/models/students.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

import { StudentError, StudentsLoading,  } from '../_actions/alumnos.actions';

import * as StudentActions from '../_actions/alumnos.actions';
import { StudentStore } from 'src/app/models/student.model';


export interface State {
    isLoading: boolean;
}

export const initialState: State = {
    isLoading: false,
};

 
  export const reducer = createReducer(
    initialState,
    on(StudentActions.StudentsLoading, (state ) => ({ ...state, isLoading: true })),
    on(StudentActions.StudentsLoaded, state => ({ ...state })),
  );