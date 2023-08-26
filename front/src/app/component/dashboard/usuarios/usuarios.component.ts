import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: User[]= [];

  displayedColumns: string[] = [ "nombre", "apellido", "usuario", "email", "password", "telefono", "rol", "acciones"];
  
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private usuarioService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarUsuarios(); 
  }

  cargarUsuarios(){
    this.listUsuarios= [];
    // this.listUsuarios= this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number){
    console.log (index);

    this.usuarioService.eliminarUsuario(index); 
    this.cargarUsuarios();

    this._snackBar.open("El usuario fue eliminado con éxito!", "" ,{
      duration:1500,
      horizontalPosition:"center",
      verticalPosition:"bottom"
    })
  }

}
