import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { ToastrService } from 'ngx-toastr';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private dialog:MatDialog, private clienteServ:ClienteService,private mensaje:ToastrService) { }
  clientes=[]
  ngOnInit(): void {
    this.clienteServ.listar().subscribe((data:any)=>{
      this.clientes=data
    })
  }
  delete(cliente){
    console.log(cliente)
    this.clienteServ.eliminar(cliente.id).subscribe((data:any)=>{
      this.clientes=data
      this.mensaje.success('Exito','Usuario Eliminado')
    },
    error=>{
      this.mensaje.error('Error','No se pudo eliminar')
      console.log(error)
    }
    )
  }
  update(cliente){

  }
  abrirDialogo(){
    let  data=[]
    let dialogo=this.dialog.open(CrearClienteComponent,{data})
    // dialogo.afterClosed()
  }
}
