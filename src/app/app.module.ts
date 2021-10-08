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
import {ServiceService}from '../app/Service/service.service'


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
    RevistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
