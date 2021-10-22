import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Anuncio } from '../Modelo/Anuncio';
import { EtiquetasEnum } from '../Modelo/EtiquetasEnum';
import { CargaanuncioService } from '../Service/cargaanuncio.service';


@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  selectedFile: File | null = null;
  fileUploaded: boolean = false;
  messageUpload: String = '';
  showImage: boolean = false;

  @Input()
  data!: Anuncio;
  editar: boolean = false;

  error: boolean = false;
  anuncio: Anuncio;
  etiquetaEnum = EtiquetasEnum;
  anuncioForm!: FormGroup;
  showError: boolean = false;
  showSuccess: boolean = false;
  message: String = "";



  constructor(private formBuilder: FormBuilder, private service: CargaanuncioService) {
    this.anuncio = new Anuncio("", "",0, EtiquetasEnum.DesarrolloWeb, "", "", "")
  }


  

  ngOnInit(): void {

    this.editar = this.data != null;

    this.anuncioForm = this.formBuilder.group({
      nombre: [null, Validators.required],
      costo: [null, Validators.required],
      dias: [null, Validators.required],
      etiqueta: [null],
      texto: [null],
      imagen: [null],
      video: [null]
      

    });
  }


  public publicar() {

    if (this.anuncioForm.valid) {
      console.log(this.anuncioForm.value);
      console.log("Enviar datos al servidor");

      this.service.publicarAnuncio(this.anuncioForm.value)
        .subscribe((creado: Anuncio) => {

          this.reset();
          console.log("Anuncio Publicado");
          console.log(creado);
          this.showError = false;
          this.showSuccess = true;
          this.message = "Anuncio publicado exitosamente!!";
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
      this.anuncioForm.reset({
        nombre: this.data.nombre,
        costo: this.data.costo,
        dias: this.data.dias,
        etiqueta: this.data.etiqueta,
        texto: this.data.texto,
        imagen: this.data.imagen,
        video: this.data.video

      });

    } else {




      this.anuncioForm.reset({
        nombre: null,
        costo: null,
        dias: null,
        etiqueta: null,
        texto: null,
        imagen: null,
        video: null

      });
    }
  }


  subir(): void {
    if (this.editar) {
      
    } else {
      this.publicar();
    }
  }

  fileUploadInAngular(event: Event) {
    const files = (event.target as  HTMLInputElement).files;
    if (files != null) {
      this.selectedFile = files.item(0);
    }
  }

  uploadFileToServer() {
    if (this.selectedFile != null) {
      this.service.fileUpload(this.selectedFile).subscribe(
        (data) => {
          this.fileUploaded = true;
          this.messageUpload =
            'El Archivo ' + this.selectedFile?.name + ' se cargo de manera correcta!';
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  regresar() {
    location.href = "/administrador";
  }

}