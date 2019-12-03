import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { Book } from '../../../interfaces/book';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private api: ServiceService,
  ) { }
  private book: Book;
  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    this.api.getAllBooks().subscribe((book: Book) => (this.book = book));
  }

}
