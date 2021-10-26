import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anuncio } from '../Modelo/Anuncio';

@Injectable({
  providedIn: 'root'
})
export class CargaanuncioService {

  readonly URLcargar =
  "http://localhost:8080/Proyecto/CargarAnuncio";

  readonly url = "http://localhost:8080/Proyecto/";

  constructor(private http: HttpClient) { }


  public fileUpload(fileToUpload: File): Observable<void> {
    const formData: FormData = new FormData();

    formData.append("datafile", fileToUpload, fileToUpload.name);

    return this.http.post<void>(this.URLcargar, formData);
}



public publicarAnuncio(anuncio: Anuncio): Observable<Anuncio> {
  return this.http.post<Anuncio>(this.url + "CargarAnuncio", anuncio);
}

public Listar(): Observable<Anuncio[]> {
  return this.http.get<Anuncio[]>(this.url + "listarAnuncio");
  
}
}
