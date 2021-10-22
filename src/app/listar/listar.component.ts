import { Component, Input, OnInit } from '@angular/core';
import { Revista } from '../Modelo/Revista';
import{ServiceService}from '../Service/service.service'; 


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  listadoRevistas: Revista[] = [];
revista!: Revista;


  @Input() listado!: Revista;
  constructor(private servicio: ServiceService) { 

    servicio.Listar()
    .subscribe((listadoRevistas: Revista[]) => {
      this.listadoRevistas = listadoRevistas;
    });
  }

  ngOnInit(): void{
    

}

publicar() {
  location.href = "/publicar";

}

regresar() {
  location.href = "/revista";
}


Editar(revista: Revista): void{
  //envio el codigo de la revista seleccionada 
localStorage.setItem("nombre", revista.nombre.toString());
location.href = "/editar";
console.log("nombre")
}

}