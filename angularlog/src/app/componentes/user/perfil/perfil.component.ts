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

  book: Book;
  books: Book[];

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    this.api.getAllBooks().subscribe((book: Book) => (this.book = book));
  }

  getBookbyTitulo(form){
    console.log(form.value.titulo);
    this.api.getBookbyTitle(form.value.titulo).subscribe((data: Book) => {
      this.book=data;
    },(error: HttpErrorResponse) => {
      if (error.status === 404) {
        alert('Libro no encontrado');
      }
      this.book= undefined;
    })
  }
}
