import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { Medicao } from '../../tabs/medicao.model';
import { AcceptedFormatBarChart } from '../accepted-format.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {

  @Input() inputs: Medicao[];
  results: AcceptedFormatBarChart[];  
  inputsIsLoaded: boolean = false;
  view: [number, number] = [950, 500];
  schemeType: string = "ordinal";
  gradient: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = false;
  legendTitle: string = "Medições";
  legendPosition: LegendPosition = LegendPosition.Right;
  legend: boolean = false;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  noBarWhenZero: boolean = false;
  yAxisLabel: string = "Medição";
  xAxisLabel: string = "Data/Hora";
  animations: boolean = true;
  showGridLines: boolean = true;
  barPadding: number = 2;
  tooltipDisabled: boolean = false;
  roundEdges: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.checkInputsArray();
    this.results = [];
    if(this.inputsIsLoaded)
      this.convertInputToAcceptedChartDataFormat();
  }

  checkInputsArray(): void {
    this.inputsIsLoaded = this.inputs !== undefined && this.inputs.length !== 0;
  }

  convertInputToAcceptedChartDataFormat(): void {
    this.inputs.forEach((input) => {
      const displayName = Object.keys(input.values)[0] as keyof typeof input.values;
      this.results.push({
        name: input.timestamp,
        value: Number(input.values[displayName]),
      });
    });
  }

  formatXTicks(value: string): string {
    const pieces = value.split("/");
    const time = pieces[2].split(" ");
    return `${pieces[0]}/${pieces[1]} ${time[1]}`;
  }
}
