import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Medicao } from '../tabs/medicao.model';
import { AcceptedFormat } from './accepted-format.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() inputs: Medicao[];
  //results: AcceptedFormat;  
  inputsIsLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.checkInputsArray();
    //this.results = { labels: [], lines: [] };
    // if(this.inputsIsLoaded)
    //   this.convertInputToAcceptedTableDataFormat();
  }

  checkInputsArray(): void {
    this.inputsIsLoaded = this.inputs !== undefined && this.inputs.length !== 0;
  }

  // convertInputToAcceptedTableDataFormat(): void {
  //   this.results.labels = ['Data/Hora', ...Object.keys(this.inputs[0].values)];

  // }
}
