import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { PerfilComponent } from './componentes/user/perfil/perfil.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './componentes/user/registro/registro.component';
//Cookieservices???

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    RegistroComponent,
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
