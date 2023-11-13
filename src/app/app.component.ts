import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  })
export class AppComponent implements OnInit{
  public rol = null;
  nombre=null;
  // constructor(private perfil:PerfilComponent){  }
  constructor(private router:Router, private toastr:ToastrService){
  }
  ngOnInit():void{
     
  }
}