import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root',
})
export class FirestoreService {

  clients :Observable<any[]>;
  data :Observable<any[]>;
  name :Observable<any>;


  constructor(private firestoreService: AngularFirestore) {}

  
  getDataClients() {
    this.clients = this.firestoreService.collection('students').snapshotChanges();
      return this.clients
    }

  getNamesClients() {
    this.data = this.firestoreService.collection('subjetcs').snapshotChanges();
      return this.data
    }

  getNameClientById(subjetc_id:string){
      this.name = this.firestoreService.collection('subjetcs').doc(subjetc_id).valueChanges()
            return this.name
  }


  createClient( registerForm:any ){

    console.log(registerForm.subject_id);
   
     this.firestoreService.collection('students').add({
      name: registerForm.name,
      subject_id :registerForm.subject_id,
      description:registerForm.description,
      lastname:registerForm.lastname,
      note: registerForm.note,
    })
    .catch((error)=>{
      //Hacer modal de error
        console.log("mensaje de error", error);
     });

  }


  updateClient( registerForm:any , id:string){

      
    const updateData =this.firestoreService.collection('students')
      updateData.doc(id).update({
      name: registerForm.name,
      lastname:registerForm.lastname,
      subject_id :registerForm.subject_id,
      description:registerForm.description,
      note: registerForm.note,
      })
      .catch((error)=>{
        //Hacer modal de error
          console.log("mensaje de error", error);
      });

  }
}
