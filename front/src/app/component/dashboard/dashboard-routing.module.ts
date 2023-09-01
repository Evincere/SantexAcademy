import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { AuthGuard } from '../../guards/auth.guard';
import { RoleGuard } from 'src/app/guards/role.guard';

const routes: Routes = [
  {
    path:"", 
    component: DashboardComponent, 
    canActivate: [AuthGuard], // protege todo el modulo 
    children:[
    { path:"", component: InicioComponent },
    { path: 'usuarios', component: UsuariosComponent, canActivate: [RoleGuard], data: { rol: 'admin' } },
    { path: 'encuesta', component: EncuestaComponent, canActivate: [RoleGuard], data: { rol: 'encuestador' } },
    { path: 'crear-usuario', component: CrearUsuarioComponent, canActivate: [RoleGuard], data: { rol: 'admin' } }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
