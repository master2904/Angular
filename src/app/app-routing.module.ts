import { CaruselComponent } from './carusel/carusel.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path:'usuario',component:UsuarioComponent},
  {path:'carusel',component:CaruselComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
