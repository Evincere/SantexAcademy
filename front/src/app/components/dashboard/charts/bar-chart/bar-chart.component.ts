import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  materialData = [
    {
      "name": "Folletos",
      "value": 120
    },
    {
      "name": "Revistas",
      "value": 80
    },
    {
      "name": "Planos",
      "value": 60
    },
    {
      "name": "Calcomanías",
      "value": 40
    },
    {
      "name": "Guía de Servicios",
      "value": 100
    }
  ];

  materialView: [number, number] = [500, 400];
  materialShowXAxis: boolean = true;
  materialShowYAxis: boolean = true;
  materialGradient: boolean = false;
  colorScheme: any = 'cool'
  legendPosition: any = 'right';

  ngOnInit(): void {
    
  }
}
