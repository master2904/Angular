import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor() { }
  usuarios=[]
  ngOnInit(): void {
    this.usuarios=[
    {"id":"1","nombre":"juan","ci":"12456"},
    {"id":"2","nombre":"isabel","ci":"12456"},
    {"id":"3","nombre":"Yamil","ci":"12456"},
    {"id":"4","nombre":"Roly","ci":"12456"},
    {"id":"5","nombre":"Daniel","ci":"12456"},
  ]

  }

}
