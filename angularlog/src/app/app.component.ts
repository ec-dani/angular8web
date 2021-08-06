import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 8';
  mensaje = ' Login y Registro ';
  
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private api: ServiceService
    ) {};

  ngOnInit(){
  }

  login(){
    this.router.navigateByUrl('/user/login');
  }

  registrar(){
    this.router.navigateByUrl('/user/registro')
  }

  perfil(){
    this.router.navigateByUrl('user/perfil')
  }
}
