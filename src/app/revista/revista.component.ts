import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registrarse } from '../Modelo/Registrar/Registrarse';
import { Revista } from '../Modelo/Revista';
import { Editor } from '../Modelo/Editor';
import { RolEnum } from '../Modelo/Registrar/RolEnum';

@Component({
  selector: 'app-revista',
  templateUrl: './revista.component.html',
  styleUrls: ['./revista.component.css']
})
export class RevistaComponent implements OnInit {

  //listadoUsuario: Registrarse[] = [];
  listadoUsuario: Editor[] = []
  usuario:any = {};

  @Input() listado!: Editor;
  constructor() { }

  ngOnInit(): void {   

  }

  publicar() {
    location.href = "/publicar";

  }
  
  reportes() {
    location.href = "/reporteseditor";

  }
  perfil(){
    location.href = "/perfil";

  }
  listar(){
    location.href = "/listar";

  }

  Verperfil(){
    location.href = "/listar-perfil";

  }

  logout(){

    
  }
}
