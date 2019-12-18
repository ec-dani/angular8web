import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    private api: ServiceService,
    private router: Router,
    private cookieService: CookieService,
  ) { }

  ngOnInit() {
  }

  registrar(data) {
    console.log(data.value);
    this.api.registrarUser(data.value).subscribe((response:{token: string}) => {
      this.cookieService.set('token', response.token);
      console.log( response.token);
      alert('usuario guardado correctamente');
      this.router.navigateByUrl('/user/perfil');
    }, (error: HttpErrorResponse) => {
      console.log(error)
      alert(error.error.message);
    });
  }
}
