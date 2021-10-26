import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { EditarComponent } from './editar/editar.component';
import { HomeComponent } from './home/home.component';
import { ListarAnunciosComponent } from './listar-anuncios/listar-anuncios.component';
import { ListarPerfilComponent } from './listar-perfil/listar-perfil.component';
import { ListarComponent } from './listar/listar.component';
import { LoginComponent } from './login/login.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicarComponent } from './publicar/publicar.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ReportesComponent } from './reportes/reportes.component';
import { RevistaComponent } from './revista/revista.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { PrincipalComponent } from './principal/principal.component';
import { ReporteseditorComponent } from './reporteseditor/reporteseditor.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  //crear la ruta hacia el componente
{path:'', component:LoginComponent},
{path:'revista', component:RevistaComponent},
{path:'registrarse', component:RegistrarseComponent},
{path: 'publicar', component:PublicarComponent},
{path: 'reportes', component:ReportesComponent},
{path: 'perfil', component:PerfilComponent},
{path: 'listar', component:ListarComponent},
{path: 'home', component:HomeComponent},
{path: 'suscripcion', component:SuscripcionComponent},
{path: 'tarjeta', component:TarjetaComponent},
{path: 'listar-perfil', component:ListarPerfilComponent},
{path: 'administrador', component:AdministradorComponent},
{path: 'nuevo', component:NuevoComponent},
{path: 'anuncio', component:AnuncioComponent},
{path: 'editar', component:EditarComponent},
{path: 'listar-anuncios', component:ListarAnunciosComponent},
{path: 'principal', component:PrincipalComponent},
{path: 'reporteseditor', component:ReporteseditorComponent},
{path: 'comentario', component:ComentarioComponent},
{path: 'reporte', component:ReporteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
