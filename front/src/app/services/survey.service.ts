import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';

import { surveyList } from '../interfaces/survey-list'
import { Survey } from '../interfaces/Survey';

import { environment } from '../../environments/environment';
import { Observable, firstValueFrom } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})


export class SurveyService {
  private appUrl = environment.APP_URL;

  constructor(private http: HttpClient) { }

  //Traigo Datos del Usuario actual para evaluar si puede ver todas las encuestas
  
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


  async getUserById(id: number): Promise<User> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    // Usa template literals para construir la URL correctamente
    const usersObservable = this.http.get<User>("http://localhost:3000/user/" + id, { headers });

    return await firstValueFrom(usersObservable);
  }


 //jz Traer Datos de los Encuestadores que realizaron cada Encuesta para el listado


 //Traigo lista de Encuestas
  async getSurveys(token: string): Promise<surveyList[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    try {
      const surveysObservable = this.http.get<surveyList[]>(`${this.appUrl}api/surveys`, { headers });
      console.log(surveysObservable);

      return await firstValueFrom(surveysObservable);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  getSurveyPaginator(page: number, pageSize: number): Observable<any> {
    console.log(page);
    return this.http.get(`${this.appUrl}api/surveys?page=${page}&pageSize=${pageSize}`);
  }


}



