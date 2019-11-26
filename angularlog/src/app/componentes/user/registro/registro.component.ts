import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    private api: ServiceService,

  ) { }

  ngOnInit() {
  }

  registrar(data) {
    console.log(data.value);
    this.api.registrarUser(data.value).subscribe((response) => {
      alert('usuario guardado correctamente');
    }, (error: HttpErrorResponse) => {
      alert(error.message);
    });
  }
}
