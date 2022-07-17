import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { DateRange } from '../date-range/date-range.model';
import { Medicao } from './medicao.model';
import { MedicaoService } from './medicao.service';
import { TipoMedicao } from './medicao.model';

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
  potenciaAparenteCapacitiva: number = 0;

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
      case TipoMedicao.TensoesCorrentes: 
        this.medicoes = await lastValueFrom(this.medicaoService.readTensoesCorrentes(this.currentMeasurerID,  this.dateRange));
        break;

      case TipoMedicao.Potencias: 
        this.medicoes = await lastValueFrom(this.medicaoService.readAllPotencias(this.currentMeasurerID,  this.dateRange));
        break;
      
      case TipoMedicao.Consumos_Ativos: 
        this.medicoes = await lastValueFrom(this.medicaoService.readConsumosAtivos(this.currentMeasurerID,  this.dateRange));
        break;

      case TipoMedicao.Consumos_Reativos: 
        this.medicoes = await lastValueFrom(this.medicaoService.readConsumosReativos(this.currentMeasurerID,  this.dateRange));
        break;

      case TipoMedicao.Demandas_Ativas: 
        this.medicoes = await lastValueFrom(this.medicaoService.readDemandasAtivas(this.currentMeasurerID,  this.dateRange));
        break;

      case TipoMedicao.Demandas_Reativas: 
        this.medicoes = await lastValueFrom(this.medicaoService.readDemandasReativas(this.currentMeasurerID,  this.dateRange));
        break;

      case TipoMedicao.Fatores_Potencia: 
        this.medicoes = await lastValueFrom(this.medicaoService.readFatoresPotencia(this.currentMeasurerID,  this.dateRange));
        break;
      
      case TipoMedicao.Tabela: 
        this.medicoes = await lastValueFrom(this.medicaoService.readAll(this.currentMeasurerID,  this.dateRange));
        break;
      }
  }

  async corrigir(): Promise<void> {
    this.potenciaAparenteCapacitiva = Number((<HTMLInputElement>document.getElementById("qcap")).value);
    if(this.potenciaAparenteCapacitiva && !isNaN(this.potenciaAparenteCapacitiva)) {
      this.medicoes = await lastValueFrom(this.medicaoService.readFatoresPotenciaCorrigidos(this.currentMeasurerID, this.potenciaAparenteCapacitiva, this.dateRange));
    }
  }

  tabDefiner(event: MatTabChangeEvent): void {
    this.currentTab = event.index;
    this.readMedicao(this.currentTab);
  }
}
