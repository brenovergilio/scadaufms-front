import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { Medicao } from '../../tabs/medicao.model';
import { AcceptedFormat, Series } from '../accepted-format.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {

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
      this.convertInputToAcceptedChartDataFormat()
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
          name: new Date(input.timestamp)
        });
      }

      this.results.push({
        name: valuesKeys[count],
        series: series
      });
      count++;
    }    
  }

  formatDate(value: Date): string {
    // var locale = 'pt-BR';
    // let formatOptions: Intl.DateTimeFormatOptions;
    // if (value.getSeconds() !== 0) {
    //   formatOptions = { second: '2-digit' };
    // } else if (value.getMinutes() !== 0) {
    //   formatOptions = { hour: '2-digit', minute: '2-digit' };
    // } else if (value.getHours() !== 0) {
    //   formatOptions = { hour: '2-digit' };
    // } else if (value.getDate() !== 1) {
    //   formatOptions = value.getDay() === 0 ? { month: 'short', day: '2-digit' } : { weekday: 'short', day: '2-digit' };
    // } else if (value.getMonth() !== 0) {
    //   formatOptions = { month: 'long' };
    // } else {
    //   formatOptions = { year: 'numeric' };
    // }
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: false
    };
    const test = new Intl.DateTimeFormat("pt-BR", options).format(value); 
    console.log(test);
    return test;
  }
}
