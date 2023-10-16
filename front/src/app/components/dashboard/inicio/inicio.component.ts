import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  mostrarCard = false;
  esEncuestador = false;
  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.esEncuestador = this.authService.hasRole('encuestador');
    setTimeout(() => {
      this.mostrarCard = true;
    }, 1000);
  }
}
