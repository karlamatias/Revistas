import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Registrarse } from '../Modelo/Registrar/Registrarse';
import { RolEnum } from '../Modelo/Registrar/RolEnum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  registrarse: Registrarse;
  rolenum = RolEnum;
  registrarseForm!: FormGroup;
  showError: boolean = false;
  showSuccess: boolean = false;
  message: String = "";

  constructor(private formBuilder: FormBuilder, private service: ServiceService) {
    this.registrarse = new Registrarse("", "", RolEnum.Editor)

  }

  ngOnInit(): void {
    this.registrarseForm = this.formBuilder.group({
      usuario: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      rol: [null, Validators.required]
    });
  }

  public crear() {

    if (this.registrarseForm.valid) {
      console.log(this.registrarseForm.value);
      console.log("Enviar datos al servidor");

      this.service.create(this.registrarseForm.value)
        .subscribe((creado: Registrarse) => {

          this.registrarseForm.reset({
            "usuario:": null,
            "password": null,
            "rol": null

          });
          console.log("Usuario Creado");
          console.log(creado);
          this.showError = false;
          this.showSuccess = true;
          this.message = "Su cuenta se creo Exitosamente!!" ;
        }, (error: any) => {
          console.log("Hubo un error");
          console.log(error);
          this.showError = true;
          this.message = error.error.message;
        });


    }
  }



  regresar() {
    location.href = "/";
  }

}
