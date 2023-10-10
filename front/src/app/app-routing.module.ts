import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerUsuarioComponent } from './components/dashboard/usuarios/ver-usuario/ver-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { CrearUsuarioComponent } from './components/dashboard/usuarios/crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './components/dashboard/usuarios/usuarios.component';
import { SurveyListComponent } from './components/dashboard/survey-list/survey-list.component'; //jz
import { VerEncuestaComponent } from './components/dashboard/encuesta/ver-encuesta/ver-encuesta.component'; //jz
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {
    path:"dashboard",
    loadChildren:()=>import("./components/dashboard/dashboard.module").then(x => x.DashboardModule),
    canActivate: [AuthGuard],
  },
  {path:"**",redirectTo:"login", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
