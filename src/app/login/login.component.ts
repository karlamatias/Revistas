import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../Modelo/Login';
import { ServiceService } from '../Service/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inicio: Login;
  errorInicio: boolean = false;
  loading: boolean = false;
  usuario: any = {};
  loginForm!: FormGroup;
  showError: boolean = false;
  showSuccess: boolean = false;
  message: String = "";

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private service: ServiceService) {
    this.inicio = new Login("", "")
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  login() {

   /*let formulario: any = document.getElementById("login")
   //DA ERROR EN EL FRONTED REVISAR!
    let valido: boolean = formulario.reportValidity();

    if (valido) {
      this.loading = true;
      //llamar al servicio
      this.loginService()
      .subscribe(
        data=> this.iniciarSesion(data)
      )
      
      

    }*/
    location.href = "/revista";
  }


  iniciarSesion(resultado: any) {
   /* this.loading = false;

    if(resultado){
      //si no es nulo
      location.href = "/revista";
    }else{

      //si es nulo
       this.errorInicio = true;
    }*/
    location.href = "/revista";
  }

  loginService() {
    var httpOption = {

      headers: new HttpHeaders({
        'Content-Type': 'aplicacion/json'

      })
    }
    return this.http.post<any>("http://localhost:8080/Proyecto/ingresar", this.usuario, httpOption)
  }






  CrearCuenta() {
    location.href = "/registrarse";

  }

}
