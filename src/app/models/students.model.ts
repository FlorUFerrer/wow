import { Observable } from "rxjs";

export class Student{
  id: string;
  subject_id: string;
  description: string;
  name: string;
  lastname: string;
  note: string;
  subject_name: Observable<string>
}

export class ExtendedStudent  extends Student {
  loading : boolean;
}