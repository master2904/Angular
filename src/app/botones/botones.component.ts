import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent implements OnInit {

  constructor(private mensaje:ToastrService) { }
  saludo():void{
    this.mensaje.success('Hola','En buena hora')
  }
  ngOnInit(): void {
  }

}
