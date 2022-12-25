import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable } from 'rxjs';
import { Student } from 'src/app/models/students.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { EditTableComponent } from '../edit-table/edit-table.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements AfterViewInit {
  @Input() filterClient: string;
  @Input() gatewaysList: any[] = [];
  //@Output() formProduct$: Observable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  enabled: boolean = false;
  displayedColumns: string[] = [
    'name',
    'lastname',
    'subject_id',
    'note',
    'description',
  ];
  //Filters
  filterPerCostumer = '';
  search = new FormControl('');
  //firestoreService

  IdDocument$: Observable<any>;

  getDataClient$: Observable<any>;
  getNamesClient$: Observable<any>;
  getNameClient$: Observable<any>;
  getNameClientById$: Observable<any>;
  filterCLient$: Observable<any>;
  getClient$: Observable<any>;
  dataSource: any;
  nameClient: any;
  text: boolean = false;

  constructor(
    private cdref: ChangeDetectorRef,
    public firestoreService: FirestoreService,
    public dialog: MatDialog
  ) {}

  getPagination(value: any) {
    this.dataSource = new MatTableDataSource<Student>(value);
    this.dataSource.paginator = this.paginator;
  }

  //Get data row
  onRowClicked(row: any) {
  const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      description: row.description,
      subject_id: row.subject_id,
      name: row.name,
      lastname : row.lastname,
      note: row.note,
      id : row.id,
    }
  this.dialog.open(EditTableComponent ,dialogConfig );

  }

  //Filter Search
  filterCostumer(value: string) {
    this.filterPerCostumer = value;
    return this.filterPerCostumer;
  }


  getData() {
    this.getClient$ = this.firestoreService
      .getNamesClients()
      .pipe(
        map((names: any[]) => names.map((name: any) => name.payload.doc.data()))
      );
  }

  getDataClients() {
    this.getDataClient$ = this.firestoreService.getDataClients().pipe(
      map((students: Student[]) =>
      students
        .map((student: any) =>( {
          ...student.payload.doc.data() ,
          id : student.payload.doc.id,
          }))
          .map((student) => {
            student.subject_name = this.getClientName(student.subject_id);
            return student;
          })
      )
    );
    this.getDataClient$.subscribe((writeTable) =>
      this.getPagination(writeTable)
    );
  }

 getClientName(subject_id: string): Observable<string> {
    return this.firestoreService.getNameClientById(subject_id).pipe(
      map((name) => {
        return name?.name;
      })
    );
  }


  ngAfterViewInit() {
    this.cdref.detectChanges();
  }

  ngOnInit() {
    this.getDataClients();
  }

  ngOnDestroy() {}
}
