import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Feriado } from '../feriado.model';
import { FeriadoService } from '../feriado.service';
import { FeriadoReadDataSource } from './feriado-read-datasource';

@Component({
  selector: 'app-feriado-read',
  templateUrl: './feriado-read.component.html',
  styleUrls: ['./feriado-read.component.css']
})
export class FeriadoReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Feriado>;
  dataSource: FeriadoReadDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'day', 'actions'];

  constructor(private feriadoService: FeriadoService) {
    this.dataSource = new FeriadoReadDataSource();
    this.feriadoService.read().subscribe(feriados => {
      this.dataSource.data = feriados.map(feriado => {
        return {
          id: feriado.id,
          name: feriado.name,
          day: feriado.day
       }
      });
      this.paginator._changePageSize(this.paginator.pageSize); 
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
