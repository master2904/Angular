import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  })
export class AppComponent implements OnInit{
  constructor(private mensaje:ToastrService){}
  saludo():void{
    this.mensaje.success('Hola','En buena hora')
  }
  ngOnInit(): void {

  }
}
