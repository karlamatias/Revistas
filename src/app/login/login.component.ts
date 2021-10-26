import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../Service/service.service';
import { Registrarse } from '../Modelo/Registrar/Registrarse';
import { RolEnum } from '../Modelo/Registrar/RolEnum';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inicio: Registrarse;
  errorInicio: boolean = false;
  loading: boolean = false;

  loginForm!: FormGroup;
  showError: boolean = false;
  showSuccess: boolean = false;
  message: String = "";
  rol!: RolEnum;
  

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private service: ServiceService) {
    this.inicio = new Registrarse("", "", RolEnum.Editor)
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  login() {

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      console.log("Enviar datos al servidor");
      this.loading = true;
      //llamar al servicio
      this.service.login(this.loginForm.value)
        .subscribe(
          data => this.iniciarSesion(data))

         
      this.loginForm.reset({
        "usuario:": null,
        "password": null,


      });
      
    }

  }



  CrearCuenta() {
    location.href = "/registrarse";

  }

  iniciarSesion(resultado: any) {

    this.loading = false;

    if (resultado) {
      
  
    location.href = "/principal";
  
  


  
    
     
      
    } else {
      //si es nulo
      this.errorInicio = true;
    }
  }


}
