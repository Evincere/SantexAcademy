import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { SurveyListComponent } from './survey-list/survey-list.component'; //jz
import { VerEncuestaComponent } from './encuesta/ver-encuesta/ver-encuesta.component'; //jz
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {path:"", component: DashboardComponent, 
  canActivate: [AuthGuard], 
  children:[
    {path:"", component: InicioComponent},
    {path:"usuarios", component: UsuariosComponent},
    {path:"encuesta", component: EncuestaComponent},
    {path:"crear-usuario", component: CrearUsuarioComponent},
    {path:"survey-list", component: SurveyListComponent}, //jz
    {path:"ver-encuesta", component: VerEncuestaComponent} //jz
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
