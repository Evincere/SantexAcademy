import { Component, OnInit, inject } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgIf } from '@angular/common';

import { UserService } from '../../../services/usuario.service';
import { surveyList } from 'src/app/interfaces/survey-list';
import { SurveyService } from 'src/app/services/survey.service';
import { EncuestaComponent } from 'src/app/components/dashboard/encuesta/encuesta.component';
import { VerEncuestaComponent } from 'src/app/components/dashboard/encuesta/ver-encuesta/ver-encuesta.component';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from 'src/app/interfaces/user';

// Listado de Encuestas hardcoded
/*
function addHoursToDate(objDate: Date, intHours: number) {
  var numberOfMlSeconds = objDate.getTime();
  var addMlSeconds = (intHours * 60) * 60000;
  var newDateObj = new Date(numberOfMlSeconds - addMlSeconds);
  return newDateObj;
}

const listEncuestas: surveyList[] = [
  { nombre: "Bernardo", apellido:"au", email: "ju@hotmail.com", questions: { pregunta2: "xga@hotmail" }, surveyorId: 23, createdAt: new Date() },
  { nombre: "Pablo", apellido:"cu", email: "pabl@hotmail.com", questions: { pregunta2: "xga@hotmail" }, surveyorId: 23, createdAt: addHoursToDate(new Date(), 24)},  
  { nombre: "Gabriela", apellido:"alo", email: "gabi@hotmail.com", questions: { pregunta2: "xga@hotmail" }, surveyorId: 23, createdAt: addHoursToDate(new Date(), 48)},
  { nombre: "Gerardo", apellido:"vo", email: "ge@hotmail.com", questions: { pregunta2: "xga@hotmail" }, surveyorId: 23, createdAt: addHoursToDate(new Date(), 72)},
  { nombre: "Juan", apellido:"ki", email: "juan@hotmail.com", questions: { pregunta2: "xga@hotmail" }, surveyorId: 23, createdAt: addHoursToDate(new Date(), 14)},
  { nombre: "Mariana", apellido:"ed", email: "mari@hotmail.com", questions: { pregunta2: "xga@hotmail" }, surveyorId: 23, createdAt: addHoursToDate(new Date(), 12)},
  { nombre: "Ana", apellido:"ew", email: "ani@hotmail.com", questions: { pregunta2: "xga@hotmail" }, surveyorId: 23, createdAt: addHoursToDate(new Date(), 6)},
  { nombre: "Anabela", apellido:"wr", email: "bella@hotmail.com", questions: { pregunta2: "xga@hotmail" }, surveyorId: 23, createdAt: addHoursToDate(new Date(), 4)},
  { nombre: "Viviana", apellido:"xa", email: "ju@hotmail.com", questions: { pregunta2: "xga@hotmail" }, surveyorId: 23, createdAt: addHoursToDate(new Date(), 2)},
  { nombre: "Sebastian", apellido:"mi", email: "ju@hotmail.com", questions: { pregunta2: "xga@hotmail" }, surveyorId: 23, createdAt: addHoursToDate(new Date(), 1)},
  
];
*/





@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})

export class SurveyListComponent implements OnInit, AfterViewInit {

  listEncuestas: surveyList[] = [];
  page: number = 1;
  pageSize: number = 10;

  displayedColumns: string[] = ['id', 'email', 'createdAt', 'acciones'];

  dataSource!: MatTableDataSource<any>; // aqui le paso la interface

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //@ViewChild(MatSort) sort!: MatSort;
  /* Notar que!!! -> si no se agrega el simbolo de admiracion tanto en "paginator!" como en "sort!", da este error:
   error TS2564: Property 'sort' has no initializer and is not definitely assigned in the constructor.
  */

  router: any;
  user: any;

  constructor(private surveyService: SurveyService, private userService: UserService, private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarEncuestas();
    //this.dataSource.sort = this.sort;
  }

  async cargarEncuestas() {
    
    this.listEncuestas = [];
    const token = localStorage.getItem('token');
    if (token !== null) {
      try {
        //this.listEncuestas = await this.surveyService.getSurveys(token);
        //this.dataSource = new MatTableDataSource(this.listEncuestas);

        this.surveyService.getSurveyPaginator(this.page, this.pageSize).subscribe((data) => {
          console.log(data);
          this.listEncuestas = data;
          this.dataSource = new MatTableDataSource(this.listEncuestas);
        });
        
        console.log(this.dataSource);

      } catch (error) {
        console.error('Error al cargar encuestas:', error);
        
        this._snackBar.open('Ocurrió un error al cargar la lista de encuestas. Por favor, inténtelo nuevamente.', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    } else {
      this._snackBar.open('Debe iniciar sesión con rol Admin para acceder a la lista de encuestas', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    }
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    /*
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    */
  }

  
  search() {
    this.router.navigate('/dashboard');
  }


  verEncuesta() {
    const dialogRef = this.dialog.open(VerEncuestaComponent, {
      width: '95%',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Se cerro el dialog');
    });

  }



}
