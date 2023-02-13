import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrer-user',
  templateUrl: './registrer-user.component.html',
  styleUrls: ['./registrer-user.component.scss']
})
export class RegistrerUserComponent implements OnInit {

  value = '';
  constructor() { }

  ngOnInit(): void {
  }

}
