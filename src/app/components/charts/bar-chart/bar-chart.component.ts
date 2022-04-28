import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  test = [
    {
      name: 'test',
      value: 123
    },
    {
      name: 'test2',
      value: 125
    },
    {
      name: 'test3',
      value: 126
    },
    {
      name: 'test4',
      value: 128
    }
  ]
  
  schemeType: string = "ordinal";
  gradient: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = false;
  legendTitle: string = "Potência Ativa";
  legendPosition: LegendPosition = LegendPosition.Right;
  legend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  yAxisLabel: string = "Potência Ativa";
  xAxisLabel: string = "Data/Hora";
  animations: boolean = true;
  showGridLines: boolean = true;
  showDataLabel: boolean = true;
  barPadding: number = 5;
  tooltipDisabled: boolean = false;
  roundEdges: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
