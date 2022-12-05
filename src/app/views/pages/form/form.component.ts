import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }
  subjects:any = [
    'Historia',
    'Matemática',
    'Literatura',
    'Informática',
  ]

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    subject: new FormControl('', Validators.required),
    calification: new FormControl('', Validators.required)
  })

  get name() { return this.registerForm.get('name')};
  get subject() { return this.registerForm.get('subject')};
  get calification() { return this.registerForm.get('calification')};

  submitForm(form:Event) {
    form.preventDefault();
    console.log(this.registerForm.value);
  }
  ngOnInit(): void {
  }

}
