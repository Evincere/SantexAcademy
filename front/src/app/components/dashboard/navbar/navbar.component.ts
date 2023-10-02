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

  menu:Menu[]= [];


  constructor(
    private _menuService: MenuService, 
    private dialog: MatDialog, 
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.cargarMenu();
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

  cargarMenu(){
    this._menuService.getMenu().subscribe(data => {
      this.menu= data; 
    })
  }

}
