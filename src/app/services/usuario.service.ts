import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  base=environment.base
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get(this.base+'/usuario');
  }
}
