import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserLogin } from '../interfaces/user';
import { firstValueFrom, lastValueFrom, BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private appUrl: string;
  private apiUrl: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.appUrl = environment.APP_URL;
    this.apiUrl = 'user/login';
  }

  async login(user: UserLogin): Promise<any> {
    try {
      const response = this.http.post(`${this.appUrl}${this.apiUrl}`, user);
      this.isAuthenticatedSubject.next(true);
      return await firstValueFrom(response);
    } catch (error) {
      throw error;
    }
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  hasRole(rol:string | string[]): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      const decodedToken: any = jwt_decode(token);
      const userRoles = decodedToken.rol.toLowerCase();
  
      return Array.isArray(rol) ? rol.includes(userRoles) : userRoles === rol;
    } catch (error) {
      console.error('Error decoding token or checking roles:', error);
      return false;
    }
  }

  hasAnyRole(roles: string[]): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      const decodedToken: any = jwt_decode(token);
      const userRoles = decodedToken.rol.toLowerCase();

      // Verificar si al menos uno de los roles requeridos coincide
      return roles.some(role => userRoles.includes(role.toLowerCase()));
    } catch (error) {
      console.error('Error decoding token or checking roles:', error);
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }

  changePassword(userId: string, currentPassword: string, newPassword: string) {
    const url = `/user/${userId}/change-password`;
    const body = { currentPassword, newPassword };
    return this.http.put(url, body);
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
