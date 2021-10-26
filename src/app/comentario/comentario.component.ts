import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from '../Modelo/Comentario';
import { Revista } from '../Modelo/Revista';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  listadoRevistas: Revista[] = [];

  comentarios:Comentario;
  comentarform!: FormGroup;
  showError: boolean = false;
  showSuccess: boolean = false;
  message: String = "";

  @Input() listado!: Revista;
  constructor(private formBuilder: FormBuilder, private servicio: ServiceService) {
    this.comentarios = new Comentario("","","")
  


    servicio.ListarRev()
      .subscribe((listadoRevistas: Revista[]) => {
        this.listadoRevistas = listadoRevistas;
      });
  }

  ngOnInit(): void {

    this.comentarform = this.formBuilder.group({
      usuario: [null, [Validators.required, Validators.email]],
      revista: [null, Validators.required],
      comentario: [null, Validators.required]
    });
  }

  public comentar() {
    if (this.comentarform.valid) {
      console.log(this.comentarform.value);
      console.log("Enviar datos al servidor");

      this.servicio.comentar(this.comentarform.value)
        .subscribe((comentar: Comentario) => {

          console.log("Comentario Publicado");
          console.log(comentar);
          this.showError = false;
          this.showSuccess = true;
          this.message = "Tu comentario se a publicado Exitosamente!!";
        }, (error: any) => {
          console.log("Hubo un error");
          console.log(error);
          this.showError = true;
          this.message = error.error.message;
        });


    }

  }

  regresar(){

    location.href="/home";
  }

}
