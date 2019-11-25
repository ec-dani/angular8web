import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/user/login/login.component';
import { PerfilComponent } from './componentes/user/perfil/perfil.component'


const routes: Routes = [
  { path:'user/login', component: LoginComponent},
  { path:'user/perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
