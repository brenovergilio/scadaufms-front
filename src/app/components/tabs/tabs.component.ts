import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { DateRange } from '../date-range/date-range.model';
import { Medicao } from './medicao.model';
import { MedicaoService } from './medicao.service';
import { TipoMedicao } from './tipo-medicao.enum';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  currentMeasurerID: string;
  dateRange: DateRange;
  medicoes: Array<Medicao>;
  currentTab: number = 0;

  constructor(private medicaoService: MedicaoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentMeasurerID = this.route.snapshot.paramMap.get('id');
  }

  getDateRange(dateRange: DateRange): void {
    this.dateRange = dateRange;
    this.readMedicao(this.currentTab);
  }

  async readMedicao(type: TipoMedicao): Promise<void> {
    switch (type) {
      case TipoMedicao.Tensoes: 
        this.medicoes = await lastValueFrom(this.medicaoService.readTensoes(this.currentMeasurerID,  this.dateRange));
        break;

      case TipoMedicao.Correntes: 
        this.medicoes = await lastValueFrom(this.medicaoService.readCorrentes(this.currentMeasurerID,  this.dateRange));
        break;

      case TipoMedicao.Potencias_Ativas: 
        this.medicoes = await lastValueFrom(this.medicaoService.readPotenciasAtivas(this.currentMeasurerID,  this.dateRange));
        break;

      case TipoMedicao.Potencias_Reativas: 
        this.medicoes = await lastValueFrom(this.medicaoService.readPotenciasReativas(this.currentMeasurerID,  this.dateRange));
        break;

      case TipoMedicao.Potencias_Aparentes: 
        this.medicoes = await lastValueFrom(this.medicaoService.readPotenciasAparentes(this.currentMeasurerID,  this.dateRange));
        break;

      case TipoMedicao.Fatores_Potencia: 
        this.medicoes = await lastValueFrom(this.medicaoService.readFatoresPotencia(this.currentMeasurerID,  this.dateRange));
        break;
    }
  }

  tabDefiner(event: MatTabChangeEvent): void {
    this.currentTab = event.index;
    this.readMedicao(this.currentTab);
  }
}
