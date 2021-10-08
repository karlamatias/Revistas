import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Revista } from '../Modelo/Revista';
import { RevistaComponent } from '../revista/revista.component';
import{ServiceService}from '../Service/service.service'; 


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  revistas: Revista[] = [];
  constructor(private service: ServiceService, private router:Router) { 

    
  }

  ngOnInit(){
    

}
}