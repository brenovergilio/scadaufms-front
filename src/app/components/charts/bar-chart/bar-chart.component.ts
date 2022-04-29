import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { Medicao } from '../../tabs/medicao.model';
import { AcceptedFormat, Series } from '../accepted-format.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {

  @Input() inputs: Medicao[];
  results: AcceptedFormat[];  
  inputsIsLoaded: boolean = false;
  view: [number, number] = [1100, 500];
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
          name: serie[0],
          value: Number(serie[1])
        })
      }
      this.results.push({
        name: this.inputs[i].timestamp,
        series: series
      });
    }
  }
}
