import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporteseditor',
  templateUrl: './reporteseditor.component.html',
  styleUrls: ['./reporteseditor.component.css']
})
export class ReporteseditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  regresar(){

    location.href="/revista";
  }

}
