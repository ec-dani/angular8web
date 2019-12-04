import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { Book } from '../../../interfaces/book';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private api: ServiceService,
  ) { }

  books: Book[];

  ngOnInit() {
    console.log(localStorage.getItem("token"));
    this.getAllBooks();
  }

  getAllBooks(){
    this.api.getAllBooks().subscribe((book: Book[]) => (this.books = book));
  }

  getBookbyTitulo(form){
    console.log(form);
    this.api.getBookbyTitle(form.value.input).subscribe((data: Book[]) => {
      console.log(data);
      this.books=data;
    },(error: HttpErrorResponse) => {
      if (error.status === 404) {
        alert('Libro no encontrado');
      }
    })
  }

  getBookbyISBN(form){
    this.api.getBookbyISBN(form.value.input).subscribe((data: Book[]) => {
      this.books=data;
    }, (error: HttpErrorResponse) => {
      if (error.status === 404) {
        alert('Libro no encontrado');
      }
    })
  }

  getBookbyAutor(form){
    this.api.getBookbyAutor(form.value.input).subscribe((data: Book[]) => {
      this.books=data;
    }, (error: HttpErrorResponse) => {
      if (error.status === 404) {
        alert('Libro no encontrado');
      }
    })
  }

  getBookbyFechaPubli(form){
    this.api.getBookbyFechapubli(form.value.input).subscribe((data: Book[]) => {
      this.books=data;
    }, (error: HttpErrorResponse) => {
      if (error.status === 404) {
        alert('Libro no encontrado');
      }
    })
  }

  getBookbyEditorial(form){
    this.api.getBookbyEditorial(form.value.input).subscribe((data: Book[]) => {
      this.books=data;
    }, (error: HttpErrorResponse) => {
      if (error.status === 404) {
        alert('Libro no encontrado');
      }
    })
  }

  submit(form){
    if(form.value.opcion === 'Titulo'){
      this.getBookbyTitulo(form);
    }
    else if(form.value.opcion === 'ISBN'){
      this.getBookbyISBN(form);
    }
    else if(form.value.opcion === 'Autor'){
      this.getBookbyAutor(form);
    }
    else if(form.value.opcion === 'Fechapublicacion' ){
      this.getBookbyFechaPubli(form);
    }
    else if(form.value.opcion === 'Editorial'){
      this.getBookbyEditorial(form);
    }
    else if(form.value.opcion === 'Todos'){
      this.getAllBooks();
    }
    
  }
}
