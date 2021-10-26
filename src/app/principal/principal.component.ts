import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


Editor(){

    location.href = '/revista';
  }


  lector(){
    location.href= '/home';

  }

  administrador(){
    location.href= '/administrador';

  }

  logout(){
    location.href= '/';
      }
}
