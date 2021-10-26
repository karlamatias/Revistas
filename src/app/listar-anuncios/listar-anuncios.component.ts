import { Component, Input, OnInit } from '@angular/core';
import { Anuncio } from '../Modelo/Anuncio';
import { CargaanuncioService } from '../Service/cargaanuncio.service';

@Component({
  selector: 'app-listar-anuncios',
  templateUrl: './listar-anuncios.component.html',
  styleUrls: ['./listar-anuncios.component.css']
})
export class ListarAnunciosComponent implements OnInit {

  listadoAnuncios: Anuncio[] = [];
anuncio!: Anuncio;


  @Input() listado!: Anuncio;
  constructor(private servicio: CargaanuncioService) { 

    servicio.Listar()
    .subscribe((listadoAnuncios: Anuncio[]) => {
      this.listadoAnuncios = listadoAnuncios;
    });
  }

  ngOnInit(): void {
  }


  regresar() {
    location.href = "/administrador";
  }

}
