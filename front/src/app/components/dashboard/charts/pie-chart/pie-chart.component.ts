import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  data = [
    {
      "name": "Televisión",
      "value": 894
    },
    {
      "name": "Pagina web",
      "value": 500
    },
    {
      "name": "Radio",
      "value": 720
    },
      {
      "name": "Medios gráficos",
      "value": 620
    },
      {
      "name": "facebook",
      "value": 234
    },
      {
      "name": "Recomendaciones",
      "value": 450
    },
      
  ];

  view: [number, number] = [500, 400];
  legendTitle: any = 'Referencia';
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = 'right';
  colorScheme: string = 'cool';

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
