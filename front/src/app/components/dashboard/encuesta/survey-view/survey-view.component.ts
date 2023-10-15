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
  surveyList: SurveyList[] = [];// Aquí guardas la lista completa de encuestas
  paginatedSurveyList: any[] = []; // Aquí guardas las encuestas para la página actual
  totalItems: number = 0; // Total de encuestas
  itemsPerPage: number = 10; // Cantidad de encuestas por página
  pageSizeOptions: number[] = [5, 10, 20]; // Opciones de tamaño de página
  currentPage: number = 0; // Página actual
  filterText: any;

  constructor(
    private userService: UserService,
    private surveyService: SurveyService,
    private dialog: MatDialog) {

    this.totalItems = this.surveyList.length; // Establece la longitud total
    this.updatePageData(); // Actualiza la lista de encuestas para la página actual

  }

  ngOnInit(): void {
    this.cargarUsers();
    this.cargarSurveys();
    this.updatePageData();
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.updatePageData();
  }

  updatePageData(): void {
    const startIndex = this.currentPage * this.itemsPerPage;
    this.paginatedSurveyList = this.surveyList.slice(startIndex, startIndex + this.itemsPerPage);
  }


  cargarSurveys() {
    const token = localStorage.getItem('token');
    if (token) {
      this.surveyService.getSurveys(token)
        .then((surveys) => {
          this.surveyList = surveys;
          this.updatePageData();
        })
        .catch(() => {

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
          console.log('');

        });
    });
  }

  async openSurveyDetails(surveys: SurveyList[] | SurveyList) {
    if (!Array.isArray(surveys)) {
      surveys = [surveys];
    }

    const dialogRef = this.dialog.open(SurveyDetailsComponent, {
      data: surveys,
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {

    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.paginatedSurveyList = this.filterData(filterValue);
    this.totalItems = this.paginatedSurveyList.length;
    this.currentPage = 0;
  }

  filterData(filterValue: string): any[] {
    return this.surveyList.filter(survey => {
      const email = survey.email as string;
      return email.toLowerCase().includes(filterValue);
    });
  }
}
