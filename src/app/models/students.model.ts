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

// export class Gateway{
//   id: string;
//   broker:string;
//   client_id: string;
//   description: string;
//   enabled: boolean;
//   name: string;
//   password: string;
//   type: string;
//   vpn: boolean;
//   client_name: Observable<string>
// }
