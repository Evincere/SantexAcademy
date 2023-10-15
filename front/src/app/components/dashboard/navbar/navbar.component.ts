import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutConfirmationComponent } from './logout-confirmation/logout-confirmation.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: Menu[] = [
    {
      nombre: 'Dashboard',
      redirect: '/dashboard',
      roles: ['admin', 'Admin', 'encuestador']
    },
    {
      nombre: 'Usuarios',
      redirect: '/dashboard/usuarios',
      roles: ['admin', 'Admin']
    },
    {
      nombre: 'Encuesta',
      redirect: '/dashboard/encuesta',
      roles: ['admin', 'Admin', 'encuestador']
    },
    {
      nombre: 'Listado de Encuestas',
      redirect: '/dashboard/survey-view',
      roles: ['admin', 'Admin']
    },
    {
      nombre: 'Mis encuestas',
      redirect: '/dashboard/survey-view',
      roles: ['encuestador']
    },
  ];


  constructor(
    private _menuService: MenuService, 
    private dialog: MatDialog, 
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    // this.cargarMenu();
  }

  openLogoutConfirmationModal(): void {
    const dialogRef = this.dialog.open(LogoutConfirmationComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        
      }
    });
  }
  
}
