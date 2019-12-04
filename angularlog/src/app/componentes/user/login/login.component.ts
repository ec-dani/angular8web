import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import{ Token } from '../../../interfaces/token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private api: ServiceService,
    private router: Router,
  
  ) { }

  ngOnInit() {
  }

  login(data){
    console.log(data.value);
    this.api.loginUser(data.value).subscribe((response: Token) => {
      alert('Login correcto');
      localStorage.setItem("token", response.token);
      this.router.navigateByUrl('/user/perfil');
    }, (error: HttpErrorResponse) => {
      alert(error.message);
    });

  }

}
