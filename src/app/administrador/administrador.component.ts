import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

listar(){
  location.href = "/listar-anuncios";

}

  reportes() {
    location.href = "/reportes";

  }
  anuncios(){
    location.href = "/anuncio";

  }

  CrearCuenta() {
    location.href = "/nuevo";

  }

 logout(){

  location.href = "/";
  }

}
