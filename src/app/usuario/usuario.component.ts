import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuario:UsuarioService) { }
  usuarios=[]
  ngOnInit(): void {
    this.usuario.listar().subscribe((data:any)=>{
      this.usuarios=data
    })
  }
  update(item){
    console.log(item)
  }
}
