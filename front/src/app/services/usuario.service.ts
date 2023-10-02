import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user'
import { environment } from '../../environments/environment';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  async getUserById(id: number):Promise<User>   {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  
  // Usa template literals para construir la URL correctamente
  const usersObservable = this.http.get<User>("http://localhost:3000/user/" + id,  { headers });

  return await firstValueFrom(usersObservable);
  }
  private appUrl = environment.APP_URL;

  constructor(private http: HttpClient) { }

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
      const updatedUser = await this.http.put<User>(`${this.appUrl}user/${id}`, user, { headers });
      console.log(updatedUser);
      return firstValueFrom(updatedUser);
      console.log(updatedUser);
    } catch (error) {
      console.error('ERROR', error);
      throw error;
    }
  }

}
