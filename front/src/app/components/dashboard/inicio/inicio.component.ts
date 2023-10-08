import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  mostrarCard = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarCard = true;
    }, 1000);


  }

}
