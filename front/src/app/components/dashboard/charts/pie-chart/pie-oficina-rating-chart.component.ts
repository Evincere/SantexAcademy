import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-oficina-rating-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieOficinaRatingChartComponent implements OnInit {
  data = [
    {
      "name": "Excelente",
      "value": 60
    },
    {
      "name": "Muy Buena",
      "value": 120
    },
    {
      "name": "Buena",
      "value": 80
    },
    {
      "name": "Regular",
      "value": 40
    },
    {
      "name": "Mala",
      "value": 20
    },
    {
      "name": "Muy Mala",
      "value": 10
    },
    {
      "name": "Pésima",
      "value": 5
    }
  ];

  view: [number, number] = [500, 400];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = 'right';
  colorScheme: string = 'ocean';
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