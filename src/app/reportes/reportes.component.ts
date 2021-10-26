import { Component, OnInit } from '@angular/core';
import { ReporteserviceService } from '../Service/reporteservice.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(private servicio: ReporteserviceService) { 

  
  }

  ngOnInit(): void {
  }

  reporte(){

    location.href="/reporte";
    
  }

  regresar(){

    location.href="/administrador";
  }
}
