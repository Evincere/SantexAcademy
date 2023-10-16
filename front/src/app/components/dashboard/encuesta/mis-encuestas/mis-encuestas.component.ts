import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-encuestas',
  templateUrl: './mis-encuestas.component.html',
  styleUrls: ['./mis-encuestas.component.css']
})
export class MisEncuestasComponent implements OnInit {
  encuestas: any[] = [];
  filterText: string = '';
  totalItems: number = 0; // Total de encuestas
  itemsPerPage: number = 5; // Cantidad de encuestas por página
  pageSizeOptions: number[] = [5, 10, 20]; // Opciones de tamaño de página
  currentPage: number = 1; // Página actual
  paginatedSurveyList: any[] = [];
  userId: any;

  constructor(
    private router: Router,
    private userService: UserService,
    private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.userService.getIdUserSession()
      .then((userId) => {
        this.userId = userId;
        this.surveyService.getSurveysBySurveyor(userId)
          .then((data) => {
            this.encuestas = data;
            this.totalItems = data.length;
            this.paginatedSurveyList = this.getPagedItems();
          });
      });
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.paginatedSurveyList = this.getPagedItems();
  }

  getPagedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.encuestas.slice(startIndex, endIndex);
  }

  openSurveyDetails(survey: any) {
    this.router.navigate(['/encuesta-detalle', survey.id]);
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    if (filterValue !== '') {
      this.paginatedSurveyList = this.filterData(filterValue);
      this.currentPage = 1;
    } else {
      this.currentPage = 1;
      this.paginatedSurveyList = this.getPagedItems();
      this.totalItems = this.encuestas.length;
    }
  }

  filterData(filterValue: string): any[] {
    return this.encuestas.filter(survey => {
      const email = survey.email as string;

      return email.toLowerCase().includes(filterValue);
    });
  }
}