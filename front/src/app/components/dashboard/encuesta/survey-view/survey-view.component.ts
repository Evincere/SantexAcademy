import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../../../../services/usuario.service';
import { SurveyList } from '../../../../interfaces/SurveyList';
import { SurveyService } from 'src/app/services/survey.service';
import { MatDialog } from '@angular/material/dialog';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';

@Component({
  selector: 'app-survey-view',
  templateUrl: './survey-view.component.html',
  styleUrls: ['./survey-view.component.css']
})
export class SurveyViewComponent implements OnInit {

  users: User[] = [];
  surveyList: SurveyList[] = [];

  constructor(
    private userService: UserService, 
    private surveyService: SurveyService, 
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarUsers();
    this.cargarSurveys();
  }

  cargarSurveys() {
    const token = localStorage.getItem('token');
    if(token) {
      this.surveyService.getSurveys(token)
        .then((surveys)=>{
          this.surveyList = surveys;
        })
        .catch(()=>{

        });
    }
  }

  cargarUsers() {
    const token = localStorage.getItem('token');
    if (token) {
      this.userService.getOnlySurveyors()
        .then((data) => {
          this.users = data;
          this.cargarEncuestasDeEncuestador();
        })
        .catch((error) => {
          throw new Error(`Error al traer encuestadores: ${error.message}`);
        });
    }
  }

  async cargarEncuestasDeEncuestador() {
    this.users.forEach((user) => {
      const id = user.id;
      this.surveyService.getSurveysBySurveyor(id)
        .then((surveys) => {
          user.surveys = surveys;
        })
        .catch(() => {

        });
    });
  }
  
  async openSurveyDetails(user:User) {
    // Abre la ventana modal con los detalles de las encuestas del usuario
  const dialogRef = this.dialog.open(SurveyDetailsComponent, {
    data: user.surveys, 
    width: '600px', 
  });
  
  // Maneja cualquier acción después de que se cierre la ventana modal
  dialogRef.afterClosed().subscribe((result) => {
    // Puedes realizar acciones específicas si es necesario
  });
  }
}
