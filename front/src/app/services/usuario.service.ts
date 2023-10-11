import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user'
import { environment } from '../../environments/environment';
import { Observable, firstValueFrom } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private appUrl = environment.APP_URL;

  constructor(private http: HttpClient) { }

  async changePassword(value: any): Promise<boolean> {
    // Verificar que 'value' sea un objeto y tiene las propiedades necesarias
    if (value && value.currentPassword && value.newPassword) {
      const userId = await this.getIdUserSession(); 
      const url = `/user/${userId}/change-password`;
      const body = { currentPassword: value.currentPassword, newPassword: value.newPassword };

      try {
        await firstValueFrom(this.http.put<boolean>('http://localhost:3000' + url, body));
        return Promise.resolve(true);
      } catch (error) {
        return Promise.reject(false);
      }
    } else {
      return Promise.reject(false); // No se proporcionaron las propiedades necesarias
    }
  }

  async getUserById(id: number): Promise<User> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    // Usa template literals para construir la URL correctamente
    const usersObservable = this.http.get<User>("http://localhost:3000/user/" + id, { headers });

    return await firstValueFrom(usersObservable);
  }


  async createUser(user: User) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${user.token}`
    });

    try {
      const usersObservable = this.http.post(`${this.appUrl}user/`, user, { headers });
      return await firstValueFrom(usersObservable);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUsers(token: string): Promise<User[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    try {
      const usersObservable = this.http.get<User[]>(`${this.appUrl}user/`, { headers });
      return await firstValueFrom(usersObservable);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteUser({ userId, token }: { userId: number; token: string; }): Promise<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    try {
      const deleteUserObservable = this.http.delete(`${this.appUrl}user/${userId}`, { headers });
      await firstValueFrom(deleteUserObservable);
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      throw error;
    }
  }

  async getIdUserSession(): Promise<number | null> {
    const token = localStorage.getItem('token');
    if (token) {
      // Decodificar el token JWT
      const decodedToken: any = jwt_decode(token);

      // Obtener el ID del usuario del payload decodificado
      const userId = decodedToken.userId;
      return userId;
    } else {
      console.log('No se encontró un token en el localStorage.');
      return null;
    }

  }

  async updateUser(user: User): Promise<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    });
    const id = user.id;
    try {
      const updatedUser = this.http.put<User>(`${this.appUrl}user/${id}`, user, { headers });
      return firstValueFrom(updatedUser);
    } catch (error) {
      console.error('ERROR', error);
      throw error;
    }
  }

  getUsersPaginator(page: number, pageSize: number, showInactiveUsers: boolean): Observable<any> {
    return this.http.get(`${this.appUrl}user?page=${page}&pageSize=${pageSize}&showInactiveUsers=${showInactiveUsers}`);
  }

  async restoreUser(id: any): Promise<void> {
    console.log({id});
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No se encontró un token en el localStorage.');
      }
  
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      const restoreUserObservable = this.http.put<void>(`${this.appUrl}user/restore/${id}`, null, { headers });
  
      return await firstValueFrom(restoreUserObservable);
    } catch (error) {
      console.error('Error al restaurar el usuario:', error);
      throw new Error('Error al restaurar el usuario.');
    }
  }
  
}


