import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Student } from 'src/app/models/students.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  getClient$: Observable<any>;
  idClient$: Observable<any>;
  getDataClient$: Observable<any>;
  assigned$: Observable<any>;
  noAssigned$: Observable<any>;

  //Filter name's list
  filter: string;
  highlight: boolean = false;
  filterAssigned :string;

  //Filter Search by Costumer
  FilterCostumer = '';
  search = new FormControl('');

  constructor(
     public firestoreService: FirestoreService
  ) {}

  getData() {
    this.getClient$ = this.firestoreService.getNamesClients().pipe(
      map((names: any[]) => {
         return names.map((name: any) => {
           const arrClients = {
              id: name.payload.doc.id,
              name: name.payload.doc.data().name,
              number : this.getNumberClient(name.payload.doc.id ),
            };
            return arrClients;
         })
      }
        )
    );
  }

  getNumberClient(idDocument:string):Observable<number>{
    let numberClient$: Observable<any>;
    numberClient$ =this.firestoreService.getDataClients().pipe(
      map((gateways: Student[]) => {
        let clientFilter = gateways
          .map((gateway: any) =>( {
            ...gateway.payload.doc.data() ,
            id : gateway.payload.doc.id,
          }))
          .filter ( id =>  id.subject_id === idDocument)
          return clientFilter.length
        }
      ));
      return numberClient$
   }


  getDataClients() {
    this.getDataClient$ = this.firestoreService.getDataClients().pipe(
      map((gateways: Student[]) =>
        gateways
          .map((gateway: any) => gateway.payload.doc.data())
          .map((gateway: any) => {
            gateway.client_name = this.getClientName(gateway.subject_id);
            return gateway;
          })
      )
    );
  }

  getClientName(subject_id: string): Observable<string> {
    return this.firestoreService.getNameClientById(subject_id).pipe(
      map((name) => {
        return name?.name;
      })
    );
  }

  //Filter search by customer
  filterSearch(value: string) {
    this.FilterCostumer = value;
  }

  //Filter Name's list
  filterCustomer(value: string) {
      if (this.filter === value) {
      return (this.filter = '');
    }
    this.filter = value;

    return this.filter;
  }

  //Filter Assigned
  assignedFilter(value: string) {
    if (this.filter === value) {
    return (this.filter = '');
  }
  this.filter = value;
  return this.filter;
}



  productAssigned(){
    this.assigned$ =this.firestoreService.getDataClients().pipe(
      map((gateways: Student[]) => {
        let clientFilter = gateways
        .map((gateway: any) =>( {
          ...gateway.payload.doc.data() ,
          id : gateway.payload.doc.id,
        }))
        .filter ( id =>  id.enabled === true)
        return clientFilter.length
      }
      ));
  }

  productNotAssigned(){
    this.noAssigned$ =this.firestoreService.getDataClients().pipe(
      map((gateways: Student[]) => {
        let clientFilter = gateways
        .map((gateway: any) =>( {
          ...gateway.payload.doc.data() ,
          id : gateway.payload.doc.id,
        }))
        .filter ( id =>  id.enabled === false)
        return clientFilter.length
      }
      ));
  }

  ngOnInit(): void {
    this.productNotAssigned();
    this.productAssigned();
    this.getData();
    this.getDataClients();
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((name) => this.filterSearch(name as string));

  }

  ngOnDestroy() {
  }
}
