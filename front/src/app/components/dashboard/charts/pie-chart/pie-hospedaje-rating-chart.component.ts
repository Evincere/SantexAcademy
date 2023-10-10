import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-hospedaje-rating-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieHospedajeRatingChartComponent implements OnInit {
  data = [
    {
      "name": "Excelente",
      "value": 300
    },
    {
      "name": "Muy Buena",
      "value": 450
    },
    {
      "name": "Buena",
      "value": 200
    },
    {
      "name": "Regular",
      "value": 100
    },
    {
      "name": "Mala",
      "value": 50
    },
    {
      "name": "Muy Mala",
      "value": 20
    },
    {
      "name": "Pésima",
      "value": 10
    }
  ];

  view: [number, number] = [500, 400];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = 'right';
  colorScheme: string = 'cool';
  legendTitle: any = 'Referencia';
  constructor() {
    Object.assign(this,  this.data );
   }

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