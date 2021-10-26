import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PublicarComponent } from './publicar/publicar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { RevistaComponent } from './revista/revista.component';
import {ServiceService}from '../app/Service/service.service';
import { AdministradorComponent } from './administrador/administrador.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { ListarPerfilComponent } from './listar-perfil/listar-perfil.component';
import { BuscarComponent } from './buscar/buscar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { RolDirective } from './rol.directive';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { ListarAnunciosComponent } from './listar-anuncios/listar-anuncios.component'
import { PrincipalComponent } from './principal/principal.component';
import { ReporteseditorComponent } from './reporteseditor/reporteseditor.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ReporteComponent } from './reporte/reporte.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrarseComponent,
    PublicarComponent,
    ReportesComponent,
    PerfilComponent,
    ListarComponent,
    EditarComponent,
    RevistaComponent,
    AdministradorComponent,
    SuscripcionComponent,
    TarjetaComponent,
    ListarPerfilComponent,
    BuscarComponent,
    NuevoComponent,
    RolDirective,
    AnuncioComponent,
    ListarAnunciosComponent,
    PrincipalComponent,
    ReporteseditorComponent,
    ComentarioComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers:[ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
