import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './component/login/login.component';
import { CrearUsuarioComponent } from './components/dashboard/usuarios/usuarios/crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './components/dashboard/usuarios/usuarios/usuarios.component';
import { VerUsuarioComponent } from './components/dashboard/usuarios/ver-usuario/ver-usuario.component';
=======
import { LoginComponent } from './components/login/login.component';
import { CrearUsuarioComponent } from './components/dashboard/usuarios/crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './components/dashboard/usuarios/usuarios.component';
>>>>>>> fda9bcce4aff67ae9e2f55671a317326377ffc93
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
