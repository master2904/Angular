import { Component, Inject, OnInit } from '@angular/core';
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
  }
  ngOnInit(): void {
  }

}
