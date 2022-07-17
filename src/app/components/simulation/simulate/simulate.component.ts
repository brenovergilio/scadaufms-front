import { Component, OnInit } from '@angular/core';
import { DateRange } from '../../date-range/date-range.model';
import { MedidorMD30 } from '../../medidor/medidor.model';
import { MedidorService } from '../../medidor/medidor.service';
import { SimulationReturn } from '../simulation-return.model';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.css']
})
export class SimulateComponent implements OnInit {

  medidores: MedidorMD30[];
  dateRange: DateRange;
  simulationReturn: SimulationReturn;
  selectedItems: string[] = [];

  constructor(private medidoresService: MedidorService, private simulationService: SimulationService) {
    this.medidoresService.read().subscribe(medidores => {
      this.medidores = medidores;
    });
   }

  ngOnInit(): void {
  }

  getDateRange(dateRange: DateRange): void {
    this.dateRange = dateRange;
  }

  simulate(): void {
    this.simulationService.simulate(this.selectedItems, this.dateRange).subscribe((simulation) => {
      this.simulationReturn = simulation;
    });
  }

  clear(): void {
    this.simulationReturn = undefined;
  }
  
  handleCheck(event: any, medidorID: string): void {
    if(event.target.checked)
      this.selectedItems.push(medidorID);
    else
      this.selectedItems = this.selectedItems.filter((item) => item!==medidorID);
    }
}
