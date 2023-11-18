import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }
  base=environment.base
  listar(){
    return this.http.get(this.base+'cliente')
  }
  nuevo(form){
    return this.http.post(this.base+'cliente',form)
  }
  actualizar(form,id){
    return this.http.put(this.base+'cliente/'+id,form)
  }
  eliminar(id){
    return this.http.delete(this.base+'cliente/'+id)
  }
}
