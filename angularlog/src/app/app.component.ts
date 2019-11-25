import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';
import { Router } from '@angular/router';
//Hecha un ojo 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login con Angular 8';
  mensaje = 'Login';
  
  constructor(private router: Router) {};
  login(){
    this.router.navigateByUrl('/user/login');
  }

}
