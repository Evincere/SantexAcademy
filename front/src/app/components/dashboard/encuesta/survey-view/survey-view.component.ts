import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../../../../services/usuario.service';
import { SurveyList } from '../../../../interfaces/SurveyList';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey-view',
  templateUrl: './survey-view.component.html',
  styleUrls: ['./survey-view.component.css']
})
export class SurveyViewComponent implements OnInit {

  users: User[] = [];
  surveyList: SurveyList[] = [];

  constructor(private userService: UserService, private surveyService: SurveyService) { }

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
    console.log(this.users);
    
  }

}
