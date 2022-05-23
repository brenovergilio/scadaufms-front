import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { timestamp } from 'rxjs';
import { Medicao } from '../../tabs/medicao.model';
import { AcceptedFormat, Series } from '../accepted-format.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() isMoreThanOneDay: boolean;
  @Input() inputs: Medicao[];
  results: AcceptedFormat[];  
  inputsIsLoaded: boolean = false;
  view: [number, number] = [1100, 500];
  schemeType: string = "ordinal";
  gradient: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  legendTitle: string = "Medições";
  legendPosition: LegendPosition = LegendPosition.Right;
  legend: boolean = true;
  autoScale: boolean = true;
  timeline: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  yAxisLabel: string = "Medição";
  xAxisLabel: string = "Data/Hora";
  animations: boolean = true;
  showGridLines: boolean = true;
  tooltipDisabled: boolean = false;
  
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
    const valuesKeys = Object.keys(this.inputs[0].values); 
    let count = 0;

    while(count < valuesKeys.length) {
      const series: Array<Series> = new Array<Series>();
      for(let input of this.inputs) {
        const values = Object.entries(input.values); 

        series.push({
          value: Number(values[count][1]),
          name: input.timestamp
        });
      }

      this.results.push({
        name: valuesKeys[count],
        series: series
      });

      count++;
    }    
  }

  binder(fn: Function): Function {
    return (value: string) => {
      return fn.apply(this, value);
    }
  }

  formatXTicks(value: string): string {
    const pieces = value.split(" ");
    if(this.isMoreThanOneDay) return pieces[0];
    return pieces[1];
  }
}
