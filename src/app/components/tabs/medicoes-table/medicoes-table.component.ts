import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Medicao } from '../medicao.model';
import { MedicoesTableDataSource } from './medicoes-table-datasource';

@Component({
  selector: 'app-medicoes-table',
  templateUrl: './medicoes-table.component.html',
  styleUrls: ['./medicoes-table.component.css']
})
export class MedicoesTableComponent implements OnChanges, AfterViewInit {
  @Input() inputs: Medicao[]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<Medicao>;
  dataSource: MedicoesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Data/Hora', 'Tensão Fase A','Tensão Fase B', 'Tensão Fase C', 'Corrente Fase A', 'Corrente Fase B', 'Corrente Fase C', 'Potência Ativa Total', 'Potência Reativa Total'];

  constructor() {
    this.dataSource = new MedicoesTableDataSource();
  }

  ngOnChanges(): void {
    this.dataSource.data = this.inputs;
    if(this.paginator) this.paginator._changePageSize(this.paginator.pageSize); 
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
