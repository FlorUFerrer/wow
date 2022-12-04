import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  registerForm = new FormGroup({
    name:  new FormControl('', [Validators.required , Validators.minLength(3)]),
    lastname:  new FormControl('', Validators.required),
    dni: new FormControl( '', [Validators.required , Validators.minLength(8)]),
    subject:  new FormControl(''),
    calification:  new FormControl(''),
    description :  new FormControl(''),
  })

  
  subjects : any = ["Matematica" , "Historia" ,"Literatura" , "Educación Física"]
  
  get name() { return this.registerForm.get('name')};
  get lastname() { return this.registerForm.get('lastname')};
  get dni() { return this.registerForm.get('dni')};
  
  miForm(form :Event){
    form.preventDefault();
    console.log(this.registerForm.value);
  }
  
  
  
  ngOnInit(): void {

  }

}
