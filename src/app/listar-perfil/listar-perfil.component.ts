import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from '../Modelo/Perfil';
import { Revista } from '../Modelo/Revista';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-listar-perfil',
  templateUrl: './listar-perfil.component.html',
  styleUrls: ['./listar-perfil.component.css']
})
export class ListarPerfilComponent implements OnInit {


  listadoPerfil: Perfil[] = [];
 listadoRevistas: Revista[] = [];

  @Input() listado!: Perfil;
  constructor(private servicio: ServiceService) { 

    servicio.ListarPerfil()
    .subscribe((listadoPerfil: Perfil[]) => {
      this.listadoPerfil = listadoPerfil;
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

}
