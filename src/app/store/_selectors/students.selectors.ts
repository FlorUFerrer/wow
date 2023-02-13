import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentStore } from 'src/app/models/student.model';
 

export interface State {
    isLoading: boolean;
    student :StudentStore;
  }
  
  export const selectFeatureLoading = createFeatureSelector<State>('student');
  
  export const selectIsLoading = createSelector(
    selectFeatureLoading,
     (state: State) => state.isLoading,
  
  );

  export const selectStudentsData = createSelector(
    selectFeatureLoading,
    (students :State) => students
  );