import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Asume que tienes un servicio de autenticación para obtener los roles del usuario

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const requiredRole = route.data['rol'];
    if (this.authService.hasRole(requiredRole)) {
      return true;
    } else {
      // Redirigir a una página de acceso denegado o a una página principal
      return this.router.createUrlTree(['/dashboard']); // todo: redirigir a /refused
    }
  }
}