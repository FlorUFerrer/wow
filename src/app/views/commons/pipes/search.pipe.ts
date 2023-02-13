import { Pipe, PipeTransform } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { map, Observable } from 'rxjs';
import { Subjetcs } from 'src/app/models/subjects.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(list: [], name: string): any {

    if (!list) return list;
       return list.filter((customer: any) =>
      customer.name.toUpperCase().includes(name.toUpperCase())
    );

  }
}

@Pipe({
  name: 'choiceCustomer',
})
export class ChoiceCustomer implements PipeTransform {
  transform(list: any, name: string): any {

     if (!name){
      return list?.filteredData
    }
    return list.filteredData.filter ( (client:any) => client.subject_id.includes(name))
  }
}
