import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CompartidaModule } from '../compartida/compartida.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { ExpansionComponent } from './encuesta/expansion/expansion.component';

import { SurveyListComponent } from './survey-list/survey-list.component'; //jz
import { VerEncuestaComponent } from './encuesta/ver-encuesta/ver-encuesta.component'; //jz






@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    EncuestaComponent,
    CrearUsuarioComponent,
    ExpansionComponent,
    SurveyListComponent, //jz
    VerEncuestaComponent, //jz

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CompartidaModule,
    MatDialogModule,

  ]
})

export class DashboardModule { }
