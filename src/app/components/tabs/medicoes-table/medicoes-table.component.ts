import { AfterViewInit, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Medicao } from '../medicao.model';
import { MedicoesTableDataSource } from './medicoes-table-datasource';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-medicoes-table',
  templateUrl: './medicoes-table.component.html',
  styleUrls: [ './medicoes-table.component.css' ]
})
export class MedicoesTableComponent implements OnChanges, AfterViewInit {
  @Input() inputs: Medicao[]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<Medicao>;
  dataSource: MedicoesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'Data/Hora', 'Tensão Fase A (V)', 'Tensão Fase B (V)', 'Tensão Fase C (V)', 'Corrente Fase A (A)', 'Corrente Fase B (A)', 'Corrente Fase C (A)', 'Potência Ativa Total (kW)', 'Potência Reativa Total (kVAr)', 'Potência Aparente Total (kVA)', 'Fator De Potência' ];

  constructor() {
    this.dataSource = new MedicoesTableDataSource();
  }

  ngOnChanges(): void {
    if (this.inputs) this.dataSource.data = this.inputs;
    if (this.paginator) this.paginator._changePageSize(this.paginator.pageSize);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  downloadMeasurementCSV() {
    const arrayOfMeasurements = this.convertInputToArray();
    const nameOfFile = `medicoes-${arrayOfMeasurements[ 1 ][ 0 ].toString().replace(' ', '-')}-${arrayOfMeasurements[ arrayOfMeasurements.length - 1 ][ 0 ].toString().replace(' ', '-')}.csv`;
    const csv = arrayOfMeasurements.map((row) => row.join(','));
    const csvFile = csv.join('\r\n');

    const a = document.createElement('a');
    const blob = new Blob([ csvFile ], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = nameOfFile;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  downloadMeasurementXLSX() {
    const arrayOfMeasurements = this.convertInputToArray();
    const nameOfFile = `medicoes-${arrayOfMeasurements[ 1 ][ 0 ].toString().replace(' ', '-')}-${arrayOfMeasurements[ arrayOfMeasurements.length - 1 ][ 0 ].toString().replace(' ', '-')}.xlsx`;
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(arrayOfMeasurements);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Medições');
    XLSX.writeFile(wb, nameOfFile);
  }

  convertInputToArray() {
    const arrayOfMeasurements = [];
    arrayOfMeasurements.push(this.displayedColumns);
    for (const input of this.inputs) {
      const currentRow = [];
      currentRow.push(input.timestamp)
      for (const value of Object.entries(input.values))
        currentRow.push(value[ 1 ])
      arrayOfMeasurements.push(currentRow)
    }
    return arrayOfMeasurements;
  }
}
