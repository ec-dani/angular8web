import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './../interfaces/user';
import { Book } from './../interfaces/book';


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

  registrarUser(user: User){
    return this.http.post(`${this.adress}user/create`, user);
  }

  getAllBooks(){
    return this.http.get(`${this.adress}book/todos`);
  }

  getBookbyTitle(param: string){
    return this.http.get(`${this.adress}book/uno/titulo/${param}`);
  }

  getBookbyISBN(param: string){
    return this.http.get(`${this.adress}book/uno/isbn/${param}`);
  }

  getBookbyAutor(param: string){
    return this.http.get(`${this.adress}book/uno/autor/${param}`);
  }

  getBookbyFechapubli(param: string){
    return this.http.get(`${this.adress}book/uno/fechapublicacion/${param}`);
  }

  getBookbyEditorial(param: string){
    return this.http.get(`${this.adress}book/uno/editorial/${param}`);
  }
}
