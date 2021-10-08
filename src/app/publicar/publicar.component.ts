import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Revista } from '../Modelo/Revista';
import { ServiceService } from '../Service/service.service';
import { CategoriaEnum } from '../Modelo/Registrar/CategoriaEnum';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {
  error: boolean = false;

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];


  revista: Revista;
  revistaForm!: FormGroup;
  showError: boolean = false;
  showSuccess: boolean = false;
  message: String = "";
  catenum = CategoriaEnum;

  monthSelect!: any[];
  dateSelect: any;
  dateValue: any;
  day: any;

  constructor(private formBuilder: FormBuilder, private service: ServiceService) { 
    this.revista = new Revista("", "", "", "", "", "", CategoriaEnum.Otro)
  }

  ngOnInit(): void {
    this.getDaysFromDate(11, 2020)
    this.revistaForm = this.formBuilder.group({
      nombre: [null, Validators.required],
      costo: [null, Validators.required],
      fecha: [null, Validators.required],
      descripcion: [null, Validators.required],
      autor: [null, Validators.required],
      categoria: [null, Validators.required],
      
    });
  }


  public publicar() {

    if (this.revistaForm.valid) {
      console.log(this.revistaForm.value);
      console.log("Enviar datos al servidor");

      this.service.publiar(this.revistaForm.value)
         .subscribe((creado: Revista)=>{
        
          this.revistaForm.reset({
            "nombre": null,
            "costo": null,
            "categoria": null,
            "descripcion": null,
            "autor": null,
            "fecha": null

          });
          console.log("Revista Publicada");
          console.log(creado);
          this.showError = false;
          this.showSuccess = true;
          this.message = "Revista Publicada exitosamente!!" ;
        }, (error: any) => {
          console.log("Hubo un error");
          console.log(error);
          this.showError = true;
          this.message = error.error.message;
        });


    }
  }


  getDaysFromDate(month: number, year: number) {

    const startDate = moment .utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });

    this.monthSelect = arrayDays;
  }
  changeMonth(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day: { value: any; }) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;


  }
  
  regresar() {
    location.href = "/revista";
  }


}
