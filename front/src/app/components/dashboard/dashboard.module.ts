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
import { LogoutConfirmationComponent } from './navbar/logout-confirmation/logout-confirmation.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    EncuestaComponent,
    CrearUsuarioComponent,
    ExpansionComponent,
    LogoutConfirmationComponent,
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CompartidaModule,
    MatDialogModule
  ]
})
export class DashboardModule { }