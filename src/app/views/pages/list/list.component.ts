import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewRef,
} from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { map, Observable ,Subscription } from 'rxjs';
import { Student } from 'src/app/models/students.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import {  StudentsLoading } from 'src/app/store/_actions/alumnos.actions';
import {   selectIsLoading, selectStudentsData } from 'src/app/store/_selectors/students.selectors';
import { EditTableComponent } from '../edit-table/edit-table.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements AfterViewInit {
  @Input() filterClient: string;
  @Input() gatewaysList: any[] = [];
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
  text: boolean ;
  studentLoadingSubcription :Subscription;
  spinner : boolean=false;
  loading$ : Observable<boolean>;
  student$ : Observable<any>;

  constructor(
    private cdref: ChangeDetectorRef,
    public firestoreService: FirestoreService,
    public dialog: MatDialog,
    private store : Store,

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

 applyChanges() {
    if (this.cdref && !(this.cdref as ViewRef).destroyed) {
      this.cdref.detectChanges();
    }
  }

  ngAfterViewInit() {
    this.cdref.detectChanges();
  }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(selectIsLoading));
    this.store.dispatch(StudentsLoading());
    this.getDataClients();
    this.student$ = this.store.select(selectStudentsData)
  }


}


