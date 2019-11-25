import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { User } from './../interfaces/user';

const httpOptions = {
  header: new HttpHeaders({
  'token-access': 'mytoken'
})
}

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(
    private http: HttpClient
  ) {}

  private adress = 'http://localhost:3000/';
  
  loginUser(user:User){
    return this.http.post(`${this.adress}user/login`, user );
  }

  token(token: string){
    httpOptions.header= httpOptions.header.set('token-access', token );
    console.log(httpOptions.header.get('token-access'));
  }

  authToken(token: string){
    httpOptions.header= httpOptions.header.set('token-access', token );
    return this.http.get(`${this.adress}user/me/token`, { headers : httpOptions.header} );
  }
}
