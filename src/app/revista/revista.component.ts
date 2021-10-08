import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Revista } from '../Modelo/Revista';

@Component({
  selector: 'app-revista',
  templateUrl: './revista.component.html',
  styleUrls: ['./revista.component.css']
})
export class RevistaComponent implements OnInit {


  usuario:any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  publicar() {
    location.href = "/publicar";

  }
  
  reportes() {
    location.href = "/reportes";

  }
  perfil(){
    location.href = "/perfil";

  }
  listar(){
    location.href = "/listar";

  }

  logout(){

    
  }
}
