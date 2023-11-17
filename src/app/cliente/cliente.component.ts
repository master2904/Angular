import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private cliente:ClienteService) { }
  clientes=[]
  ngOnInit(): void {
    this.clientes=this.cliente.listar();
  }

}
