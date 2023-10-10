import { Component, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-group-chart',
  templateUrl: './bar-group-chart.component.html',
  styleUrls: ['./bar-group-chart.component.css']
})
export class BarGroupChartComponent implements OnInit {
  
  // Configuración de colores
  colorScheme: any = 'cool'
  // Datos para "¿Considera a Mina Clavero como un destino completo en cuanto a su oferta y servicios?"
  destinoCompletoData = [
    {
      "name": "Sí",
      "value": 65
    },
    {
      "name": "No",
      "value": 35
    }
  ];

  // Datos para "¿Recomendaría Mina Clavero como destino turístico?"
  recomendariaData = [
    {
      "name": "Sí",
      "value": 75
    },
    {
      "name": "No",
      "value": 25
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
