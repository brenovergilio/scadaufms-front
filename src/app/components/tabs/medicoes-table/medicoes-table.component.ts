import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Medicao } from '../medicao.model';
import { MedicaoService } from '../medicao.service';
import { MedicoesTableDataSource } from './medicoes-table-datasource';

@Component({
  selector: 'app-medicoes-table',
  templateUrl: './medicoes-table.component.html',
  styleUrls: ['./medicoes-table.component.css']
})
export class MedicoesTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Medicao>;
  dataSource: MedicoesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Data/Hora', 'Tensão Fase A','Tensão Fase B', 'Tensão Fase C', 'Corrente Fase A', 'Corrente Fase B', 'Corrente Fase C', 'Potência Ativa Total', 'Potência Reativa Total'];

  constructor(private medicaoService: MedicaoService) {
    this.dataSource = new MedicoesTableDataSource();
    // this.medicaoService.readAll().subscribe((medicoes: Medicao[]) => {
    //    this.dataSource.data = medicoes;
    //    this.paginator._changePageSize(this.paginator.pageSize); 
    //  });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
