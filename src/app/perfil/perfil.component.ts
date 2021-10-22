import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Perfil } from '../Modelo/Perfil';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  perfil: Perfil;
  perfilForm!: FormGroup;
  showError: boolean = false;
  showSuccess: boolean = false;
  message: String = "";

  showImage: boolean = false;


  constructor(private formBuilder: FormBuilder, private service: ServiceService) {
    this.perfil = new Perfil(0,"", "", "","");


  }

  ngOnInit(): void {
    this.perfilForm = this.formBuilder.group({
      nombre: [null, Validators.required],
      etiqueta: [null, Validators.required],
      fechaNacimiento: [null, Validators.required],
      usuarioPerfil: [null, [Validators.required, Validators.email]]

    });
  }


  public crear() {

    if (this.perfilForm.valid) {
      console.log(this.perfilForm.value);
      console.log("Enviar datos al servidor");

      this.service.crear(this.perfilForm.value)
        .subscribe((creado: Perfil) => {

          this.perfilForm.reset({
            "nombre": null,
            "etiqueta:": null,
            "fechaNacimiento": null,
            "usuarioPerfil": null

          });
          console.log("Perfil Creado");
          console.log(creado);
          this.showError = false;
          this.showSuccess = true;
          this.message = "Su perfil se creo Exitosamente!!";
        }, (error: any) => {
          console.log("Hubo un error");
          console.log(error);
          this.showError = true;
          this.message = error.error.message;
        });


    }
  }




  regresar() {
    location.href = "/revista";
  }


}
