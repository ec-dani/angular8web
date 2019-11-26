import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/user/login/login.component';
import { PerfilComponent } from './componentes/user/perfil/perfil.component';
import { RegistroComponent } from './componentes/user/registro/registro.component';

const routes: Routes = [
  { path:'user/login', component: LoginComponent},
  { path:'user/perfil', component: PerfilComponent},
  { path:'user/registro', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
