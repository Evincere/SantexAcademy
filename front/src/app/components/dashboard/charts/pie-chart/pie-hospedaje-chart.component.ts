import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-hospedaje-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieOtherChartComponent implements OnInit {
  // Datos de la encuesta sobre el tipo de hospedaje
  data = [
    {
      "name": "Hotel",
      "value": 250
    },
    {
      "name": "Cabaña",
      "value": 120
    },
    {
      "name": "Hostería",
      "value": 80
    },
    {
      "name": "Camping",
      "value": 50
    },
    {
      "name": "Casa de alquiler",
      "value": 100
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
    Object.assign(this, this.data);
  }

  ngOnInit(): void {}

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
