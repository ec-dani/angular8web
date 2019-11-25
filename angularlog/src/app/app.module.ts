import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { PerfilComponent } from './componentes/user/perfil/perfil.component';
import { FormsModule } from '@angular/forms';
//Cookieservices???

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
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
