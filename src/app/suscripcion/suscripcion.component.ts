import { Component, Input, OnInit } from '@angular/core';
import { Revista } from '../Modelo/Revista';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {


  listadoRevistas: Revista[] = [];

  @Input() listado!: Revista;
  constructor(private servicio: ServiceService) { 

    servicio.ListarRev()
    .subscribe((listadoRevistas: Revista[]) => {
      this.listadoRevistas = listadoRevistas;
    });
  }

  ngOnInit(): void {

  }


  suscripcion(){

    location.href = "/tarjeta";
  }

  regresar() {
    location.href = "/home";
  }

}
