import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registrarse } from '../Modelo/Registrar/Registrarse';
import { RolEnum } from '../Modelo/Registrar/RolEnum';
import { ServiceService } from '../Service/service.service';
import{Editor} from '../Modelo/Editor';
  
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {


  listadoUsuario: Editor[] = [];

  registrarse: Registrarse;
  rolenum = RolEnum;
  registrarseForm!: FormGroup;
  showError: boolean = false;
  showSuccess: boolean = false;
  message: String = "";


  @Input() listado!: Editor;
  constructor(private formBuilder: FormBuilder, private service: ServiceService) {
    this.registrarse = new Registrarse("", "", RolEnum.Editor)

    service.ListarUsuario()
    .subscribe((listadoUsuario: Editor[]) => {
      this.listadoUsuario = listadoUsuario;
    });

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
    location.href = "/administrador";
  }



}
