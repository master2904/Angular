import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CrearClienteComponent>,
    @ Inject(MAT_DIALOG_DATA) public data) {
      this.agregar=this.createFormGroup()
  }
  createFormGroup(){
    return new FormGroup({
      id:new FormControl(),
      nombre:new FormControl('',[Validators.required]),
      apellido:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern('[a-zA-Z]{3,20}')]),
      ci:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email])
    });
  }
  agregar:FormGroup
  get nombre(){return this.agregar.get('nombre')}
  get ci(){return this.agregar.get('ci')}
  get apellido(){return this.agregar.get('apellido')}
  get email(){return this.agregar.get('email')}
  get id(){return this.agregar.get('id')}
  ngOnInit(): void {
  }
  cancelar(){
    this.dialogRef.close()
  }
  error_nombre(){
    if(this.nombre.hasError('required'))
      return "El nombre es requerido"
  }
  error_apellido(){
    if(this.apellido.hasError('required'))
      return "El apellido es requerido"
    if(this.apellido.hasError('minLength'))
      return "El apellido debe tener minimo 3 caracteres"
    if(this.apellido.hasError('maxLength'))
      return "El apellido debe tener maximo 20 caracteres"

  }
}
