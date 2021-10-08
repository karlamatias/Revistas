import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Modelo/Login';
import { Registrarse } from '../Modelo/Registrar/Registrarse';
import { Revista } from '../Modelo/Revista';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly API_URL = "http://localhost:8080/Proyecto/";

  constructor(private http:HttpClient) { }

  public create(registarse: Registrarse): Observable<Registrarse> {
    return this.http.post<Registrarse>(this.API_URL + "registrarse", registarse);
  }
 
  public publiar(revista: Revista): Observable<Revista> {
    return this.http.post<Revista>(this.API_URL + "publicar", revista);
  }

}
