import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

   formulario = this.formBuilder.group({
    nombre: ['',[Validators.required]],
    apellido: ['',[Validators.required ]],
    edad: [ '',[Validators.required, Validators.min(16), Validators.max(99), Validators.pattern('^[0-9]+$')]],
    email: ['', [Validators.email, Validators.required]]

   });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }
  
  submitForm(): void {
    console.log(this.formulario.value);
  }

}