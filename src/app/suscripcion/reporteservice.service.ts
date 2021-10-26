import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteserviceService {

  readonly url = "http://localhost:8080/Proyecto/";

  constructor(private http: HttpClient) { }

  public generar(fecha: any): Observable<any> {
    return this.http.post<any>(this.url + "reporte2", fecha);

  }

  public mostar(): Observable<any> {
    return this.http.get<any>(this.url + "reporte2")
  }
}
