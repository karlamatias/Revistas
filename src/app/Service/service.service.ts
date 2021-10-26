import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../Modelo/Comentario';
import { Editor } from '../Modelo/Editor';
import { Perfil } from '../Modelo/Perfil';
import { Registrarse } from '../Modelo/Registrar/Registrarse';
import { RolEnum } from '../Modelo/Registrar/RolEnum';
import { Tarjeta } from '../Modelo/Registrar/Tarjeta';
import { Revista } from '../Modelo/Revista';
import { Suscribir } from '../Modelo/Suscribir';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly API_URL = "http://localhost:8080/Proyecto/";

  constructor(private http: HttpClient) { }

  public create(registarse: Registrarse): Observable<Registrarse> {
    return this.http.post<Registrarse>(this.API_URL + "registrarse", registarse);
  }

  public publiar(revista: Revista): Observable<Revista> {
    return this.http.post<Revista>(this.API_URL + "publicar", revista);
  }

  public actualizar(data: Revista): Observable<void> {
    return this.http.put<void>(this.API_URL + "publicar", data);
  }

  public Listar(): Observable<Revista[]> {
    return this.http.get<Revista[]>(this.API_URL + "listar");
  }


  public ListarUsuario(): Observable<Editor[]> {
    return this.http.get<Editor[]>(this.API_URL + "ListarUsuarios");
  }

  public ListarPerfil(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.API_URL + "ListarPerfil");
  }

  public buscar(buscar: any): Observable<Revista[]> {
    return this.http.post<Revista[]>(this.API_URL + "buscar", buscar);
  }


  public login(user: any): Observable<any> {
    return this.http.post<any>(this.API_URL + "ingresar", user);

  }


  public crear(perfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(this.API_URL + "perfil", perfil);
  }

  public ListarRev(): Observable<Revista[]> {
    return this.http.get<Revista[]>(this.API_URL + "suscripcion");
  }

  public suscribir(sus: Suscribir): Observable<Suscribir> {
    return this.http.post<Suscribir>(this.API_URL + "suscripcion", sus);
  }

  public agregarTarjeta(tarjeta: Tarjeta): Observable<Tarjeta> {
    return this.http.post<Tarjeta>(this.API_URL + "tarjeta", tarjeta);
  }

  public getRevistaId(codigo: number): Observable<Revista> {

    return this.http.get<Revista>(this.API_URL + "editar")
  }

  public actualizarRevista(revista: Revista) {
    return this.http.put<Revista>(this.API_URL + "Editar" + revista.nombre, revista)

  }

  public comentar(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(this.API_URL + "comentar", comentario);
  }
}
