import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtiquetasEnum } from '../Modelo/EtiquetasEnum';
import { CategoriaEnum } from '../Modelo/Registrar/CategoriaEnum';
import { Revista } from '../Modelo/Revista';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

listarRevistas: Revista[] = [];


  error: boolean = false;
  revista: Revista;
  etiquetaEnum = EtiquetasEnum;
  editarForm!: FormGroup;
  showError: boolean = false;
  showSuccess: boolean = false;
  message: String = "";
  catenum = CategoriaEnum;

  @Input() listado!: Revista;
  constructor(private formBuilder: FormBuilder, private service: ServiceService) {
    this.revista = new Revista("", EtiquetasEnum.DesarrolloWeb, "", "", "", "", CategoriaEnum.Otro)
  }

  ngOnInit(): void {

  
this.Editar();
    this.editarForm = this.formBuilder.group({
      nombre: [null, Validators.required],
      etiqueta: [null],
      costo: [null, Validators.required],
      fecha: [null, Validators.required],
      descripcion: [null, Validators.required],
      autor: [null, Validators.required],
      categoria: [null, Validators.required]

    });
  }

Editar(){
 let codigo = localStorage.getItem("codigo");
 this.service.getRevistaId(+codigo!)
.subscribe(data=>{
this.revista = data;

console.log(codigo);
});
}

regresar() {
  location.href = "/revista";
}

}
