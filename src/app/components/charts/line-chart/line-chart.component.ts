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
  yAxis: boolean = false;
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
    if(this.inputs !== undefined && this.inputs.length !== 0)
      this.inputsIsLoaded = true;
    else
      this.inputsIsLoaded = false;
  }

  convertInputToAcceptedChartDataFormat(): void {
    for(let i = 0; i < this.inputs.length; i++) {
      let series: Array<Series> = new Array<Series>();
      for(const serie of Object.entries(this.inputs[i].values)) {
        series.push({
          name: this.inputs[i].timestamp,
          value: Number(serie[1])
        })
        this.results.push({
          name: serie[0],
          series: series
        });
      }
    }
    
    console.log(this.results)
  }
}
