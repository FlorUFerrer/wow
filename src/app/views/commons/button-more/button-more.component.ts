import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormCustomerComponent } from '../form-customer/form-customer.component';

@Component({
  selector: 'app-button-more',
  templateUrl: './button-more.component.html',
  styleUrls: ['./button-more.component.scss'],
})
export class ButtonMoreComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
   this.dialog.open(FormCustomerComponent);

  }

  ngOnInit(): void {}
}
