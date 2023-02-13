import { StudentStore } from "./student.model";


export interface StudentState {
    loading: boolean,
    student : ReadonlyArray<StudentStore>,
}