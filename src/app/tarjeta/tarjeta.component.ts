import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tarjeta } from '../Modelo/Registrar/Tarjeta';
import { Revista } from '../Modelo/Revista';
import { Suscribir } from '../Modelo/Suscribir';
import { tipoSuscripcion } from '../Modelo/TipoSuscripcion';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {


  listadoRevistas: Revista[] = [];

  tarjeta: Tarjeta;
  suscribir: Suscribir;
  form!: FormGroup;
  suscripcionform!: FormGroup;
  tipoEnum = tipoSuscripcion;
  showError: boolean = false;
  showSuccess: boolean = false;
  message: String = "";

  @Input() listado!: Revista;
  constructor(private formBuilder: FormBuilder, private servicio: ServiceService) {

    this.tarjeta = new Tarjeta(0, "", "", 0)
    this.suscribir = new Suscribir(0, "", "", tipoSuscripcion.Anunal, "", 0,"");

    servicio.ListarRev()
      .subscribe((listadoRevistas: Revista[]) => {
        this.listadoRevistas = listadoRevistas;
      });
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      numero: [null, Validators.required],
      propietario: [null, [Validators.required, Validators.email]],
      vigencia: [null, Validators.required],
      cvv: [null, Validators.required]
    });

    this.suscripcionform = this.formBuilder.group({
      fechaSuscripcion: [null, [Validators.required]],
      costoSuscripcion: [null, Validators.required],
      tipoSuscripcion: [null, Validators.required],
      revista: [Validators.required],
      tarjeta: [null, Validators.required],
      usuarioSuscriptor: [null, [Validators.required, Validators.email]]
    });

  }


  public registrar() {

    if (this.form.valid) {
      console.log(this.form.value);
      console.log("Enviar datos al servidor");

      this.servicio.agregarTarjeta(this.form.value)
        .subscribe((agregar: Tarjeta) => {


          console.log("Revista Publicada");
          console.log(agregar);
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

  public registrarsuscripcion() {
    if (this.suscripcionform.valid) {
      console.log(this.suscripcionform.value);
      console.log("Enviar datos al servidor");

      this.servicio.suscribir(this.suscripcionform.value)
        .subscribe((agregar: Suscribir) => {


          console.log("Revista Publicada");
          console.log(agregar);
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


  regresar() {
    location.href = "/suscripcion";
  }


}
