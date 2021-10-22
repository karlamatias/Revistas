import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Revista } from '../Modelo/Revista';
import { ServiceService } from '../Service/service.service';
import { CategoriaEnum } from '../Modelo/Registrar/CategoriaEnum';
import { EtiquetasEnum } from '../Modelo/EtiquetasEnum';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  @Input()
  data!: Revista;
  editar: boolean = false;

  error: boolean = false;
  revista: Revista;
  etiquetaEnum = EtiquetasEnum;
  revistaForm!: FormGroup;
  showError: boolean = false;
  showSuccess: boolean = false;
  message: String = "";
  catenum = CategoriaEnum;


  constructor(private formBuilder: FormBuilder, private service: ServiceService) {
    this.revista = new Revista("", EtiquetasEnum.DesarrolloWeb, "", "", "", "", CategoriaEnum.Otro)
  }

  ngOnInit(): void {
    this.editar = this.data != null;

    this.revistaForm = this.formBuilder.group({
      nombre: [null, Validators.required],
      etiqueta: [null],
      costo: [null, Validators.required],
      fecha: [null, Validators.required],
      descripcion: [null, Validators.required],
      autor: [null, Validators.required],
      categoria: [null, Validators.required]

    });
  }


  public publicar() {

    if (this.revistaForm.valid) {
      console.log(this.revistaForm.value);
      console.log("Enviar datos al servidor");

      this.service.publiar(this.revistaForm.value)
        .subscribe((creado: Revista) => {

          this.reset();
          console.log("Revista Publicada");
          console.log(creado);
          this.showError = false;
          this.showSuccess = true;
          this.message = "Revista Publicada exitosamente!!";
        }, (error: any) => {
          console.log("Hubo un error");
          console.log(error);
          this.showError = true;
          this.message = error.error.message;
        });


    }
  }

  public guardar() {

    if (this.revistaForm.valid) {
      console.log(this.revistaForm.value);
      console.log("Enviar datos al servidor");
      this.data.nombre = this.revistaForm.value.nombre;
      this.data.costo = this.revistaForm.value.costo;
      this.data.categoria = this.revistaForm.value.categoria;
      this.data.descripcion = this.revistaForm.value.descripcion;
      this.data.fechaCreacion = this.revistaForm.value.fechaCreacion;
      this.service.actualizar(this.data)
        .subscribe(() => {

          this.reset();
          this.showError = false;
          this.showSuccess = true;
          this.message = "Revista Editada exitosamente!!";
        }, (error: any) => {
          console.log("Hubo un error");
          console.log(error);
          this.showError = true;
          this.message = error.error.message;
        });


    }
  }




  reset(): void {

    if (this.editar) {
      this.revistaForm.reset({
        nombre: this.data.nombre,
        etiqueta: this.data.etiqueta,
        costo: this.data.costo,
        categoria: this.data.categoria,
        descripcion: this.data.descripcion,
        autor: this.data.autor,
        fecha: this.data.fechaCreacion

      });

    } else {




      this.revistaForm.reset({
        nombre: null,
        etiqueta: null,
        costo: null,
        categoria: null,
        descripcion: null,
        autor: null,
        fecha: null

      });
    }
  }


  subir(): void {
    if (this.editar) {
      this.guardar();
    } else {
      this.publicar();
    }
  }

  regresar() {
    location.href = "/revista";
  }


}
