import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-confirmation',
  templateUrl: './logout-confirmation.component.html',
  styleUrls: ['./logout-confirmation.component.css']
})
export class LogoutConfirmationComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LogoutConfirmationComponent>,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  confirmLogout(): void {
    this.authService.logout();
    this.dialogRef.close(true);
    this.router.navigate(['/login']);
  }

  // Esta función se ejecutará cuando el usuario cancele el cierre de sesión
  cancelLogout(): void {
    // Cierra el cuadro de diálogo de confirmación sin cerrar la sesión
    this.dialogRef.close(false);
  }
}
