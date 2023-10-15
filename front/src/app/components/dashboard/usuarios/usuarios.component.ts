import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/usuario.service';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: User[] = [];
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize: number = 20;
  showFirstLastButtons: boolean = false;
  totalItems: number = 0;
  page: number = 1;
  displayedColumns: string[] = ["firstName", "lastName", "username", "email", "phone", "rol", "acciones"];

  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  showInactiveUsers: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  router: any;
  user: any;
  showInactiveUsersControl: any;

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private route: Router) {
    this.showInactiveUsersControl = new FormControl(false);
  }

  ngOnInit(): void {
    this.showInactiveUsersControl.valueChanges.subscribe((value: boolean) => {
      this.showInactiveUsers = value;
      this.cargarDatosDePagina(this.page, this.pageSize);
    });
    this.cargarDatosDePagina(this.page, this.pageSize);
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.paginator.page.subscribe((event) => {
        const pageIndex = event.pageIndex;
        this.page = pageIndex;
        const pageSize = event.pageSize;
        this.pageSize = pageSize;
        this.cargarDatosDePagina(pageIndex, pageSize);
      });
    }
  }
  async userRestore(userId: any) {
    try {
      await this.userService.restoreUser(userId);
      this.cargarDatosDePagina(this.page, this.pageSize);
    } catch (error) {
      console.error('Error al restaurar el usuario:', error);
    }
  }

  async cargarDatosDePagina(pageIndex: any = 1, pageSize: any = 20) {
    this.listUsuarios = [];
    const token = localStorage.getItem('token');
    if (token !== null) {
      try {
        this.userService.getUsersPaginator(pageIndex, pageSize, this.showInactiveUsers).subscribe(async (data) => {
          if (this.showInactiveUsers && data.length === 0) {
            // Si no hay usuarios inactivos y se solicitaron, muestra un mensaje informativo.
            this._snackBar.open('No hay usuarios inactivos.', '', {
              duration: 2000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom'
            });
            this.showInactiveUsersControl.setValue(false); // Desactiva el filtro de usuarios inactivos
            this.cargarTodosLosUsuarios();
            if (this.paginator) {
              this.paginator.length = this.totalItems;
            }
            this.dataSource.data = this.listUsuarios;
          } else {
            this.listUsuarios = data;
            this.totalItems = this.listUsuarios.length;
            if (this.paginator) {
              this.paginator.length = this.totalItems;
            }
            this.dataSource.data = data;
          }
        });
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
        this._snackBar.open('Ocurrió un error al cargar la lista de usuarios. Por favor, inténtelo nuevamente.', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    } else {
      this._snackBar.open('Debe iniciar sesión con rol Admin para acceder a la lista de usuarios', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    }
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (!filterValue) {
      this.cargarDatosDePagina();
      this.dataSource.data = this.listUsuarios;
    }
  }

  async deleteUser(id: number) {
    const token = localStorage.getItem('token');
    if (!token) {
      this._snackBar.open(
        'Debe iniciar sesión con rol Admin para acceder a la lista de usuarios',
        '',
        {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        }
      );
      return; // Salir de la función si no hay token
    }

    const userToDelete = await this.userService.getUserById(id);
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '400px',
      data: { user: userToDelete }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.performDeleteUser(id, token);
      }
    });
  }

  private async performDeleteUser(id: number, token: string) {
    try {
      // Eliminar el usuario
      await this.userService.deleteUser({ userId: id, token });
      this.cargarDatosDePagina(this.page, this.pageSize);
      this._snackBar.open('Usuario eliminado con éxito.', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    } catch (error) {
      this._snackBar.open(
        'Ocurrió un error al eliminar el usuario. Por favor, inténtalo nuevamente.',
        '',
        {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        }
      );
    }
  }

  search() {
    this.route.navigate(['dashboard/usuarios']);
  }

  abrirVistaDeUsuario(id: any): void {
    this.dialog.open(VerUsuarioComponent, {
      width: '700px',
      disableClose: true,
      data: { id: id },
    });
  }

  cambiarPagina(event: any): void {
    this.page = event.pageIndex + 1; // Sumar 1 para que la página comience desde 1 en lugar de 0
    const newPageSize = event.pageSize;
    if (this.pageSize !== newPageSize) {
      this.pageSize = newPageSize;
      this.cargarDatosDePagina(this.page, newPageSize); // Vuelve a cargar los usuarios con el nuevo tamaño de página
    }
  }

  async clearInput(input: any) {
    input.value = '';
    this.dataSource.filter = '';
  }

  async cargarTodosLosUsuarios() {
    try {
      this.userService.getUsersPaginator(this.page, this.pageSize, this.showInactiveUsers).subscribe((data) => {
        this.listUsuarios = data;
        this.totalItems = this.listUsuarios.length;
        if (this.paginator) {
          this.paginator.length = this.totalItems;
        }
        this.dataSource.data = data;
      });
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
      this._snackBar.open('Ocurrió un error al cargar la lista de usuarios. Por favor, inténtelo nuevamente.', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    }
  }

}
