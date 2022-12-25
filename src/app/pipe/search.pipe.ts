import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})

export class SearchPipe implements PipeTransform {
  transform(list: any, word: string): any {
      if (!word) {
        return list
      }
    return list.filter((alumno: any) => alumno.nombre.toUpperCase().includes(word.toUpperCase()));
  }
}
