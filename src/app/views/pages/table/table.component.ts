import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  search = new FormControl('');
  filter: string = '';

  alumnos = [
    {
      nombre: 'Florencia',
      materia: 'Historia',
      nota: 5,
      aprobado: false,
    },
    {
      nombre: 'Facundo',
      materia: 'Matematica',
      nota: 10,
      aprobado: true,
    },
    {
      nombre: 'Alexander',
      materia: 'Literatura',
      nota: 6,
      aprobado: false,
    },
    {
      nombre: 'Leonardo',
      materia: 'Informática',
      nota: 8,
      aprobado: true,
    },
    {
      nombre: 'Nahuel',
      materia: 'Historia',
      nota: 7,
      aprobado: true,
    }
  ]

  constructor() {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((name) => this.filterSearch(name as string));
  }

  filterSearch(value: string) {
    this.filter = value;
  }



}
