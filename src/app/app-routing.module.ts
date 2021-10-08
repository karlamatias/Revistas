import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { HomeComponent } from './home/home.component';
import { ListarComponent } from './listar/listar.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicarComponent } from './publicar/publicar.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ReportesComponent } from './reportes/reportes.component';
import { RevistaComponent } from './revista/revista.component';

const routes: Routes = [
  //crear la ruta hacia el componente
{path:'', component:LoginComponent},
{path:'revista', component:RevistaComponent},
{path:'registrarse', component:RegistrarseComponent},
{path: 'publicar', component:PublicarComponent},
{path: 'reportes', component:ReportesComponent},
{path: 'perfil', component:PerfilComponent},
{path: 'listar', component:ListarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
