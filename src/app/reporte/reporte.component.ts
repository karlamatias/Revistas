import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReporteserviceService } from '../Service/reporteservice.service';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  error: boolean = false;
  showError: boolean = false;
  showSuccess: boolean = false;
  reporteForm!: FormGroup;
  message: String = "";

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private service: ReporteserviceService) { }

  ngOnInit(): void {

    this.reporteForm = this.formBuilder.group({
      inicio: [null, Validators.required],
      final: [null, Validators.required] 

    });
  }

  

  generar(){

    if (this.reporteForm.valid) {
      console.log(this.reporteForm.value);
      console.log("Enviar datos al servidor");
           //llamar al servicio
      this.service.generar(this.reporteForm.value)
        .subscribe(
          data => this.reporte(data))

         
      this.reporteForm.reset({
        "inicio:": null,
        "final": null,


      });
  }
  }


  reporte(resultado: any) {

    if (resultado) {
      
  this.service.mostar();
   
    }
  }

  regresar(){

    location.href="/reportes";
  }

}
