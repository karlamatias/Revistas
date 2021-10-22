import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Revista } from '../Modelo/Revista';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listadoRevistas: Revista[] = [];
  constructor(private servicio: ServiceService) { }

  ngOnInit(): void {
   this.buscar.valueChanges.subscribe

  }

  publicar() {
    location.href = "/publicar";

  }
  
  suscripcion() {
    location.href = "/suscripcion";

  }
  perfil(){
    location.href = "/perfil";

  }
  listar(){
    location.href = "/listar";

  }

  logout(){
    location.href = "/";
    
  }

  buscar = new FormControl('');


  /*buscar(){
    this.servicio.buscar()
    .subscribe((listadoRevistas: Revista[]) => {
      this.listadoRevistas = listadoRevistas;
    });
  }*/

}
