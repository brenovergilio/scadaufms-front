import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MedidorMD30 } from '../medidor.model';
import { MedidorService } from '../medidor.service';
import { MedidorReadDataSource } from './medidor-read-datasource';

@Component({
  selector: 'app-medidor-read',
  templateUrl: './medidor-read.component.html',
  styleUrls: ['./medidor-read.component.css']
})
export class MedidorReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MedidorMD30>;
  dataSource: MedidorReadDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','ip', 'name', 'port', 'actions'];

  constructor(private medidorService: MedidorService) {
    this.dataSource = new MedidorReadDataSource();
    this.medidorService.read().subscribe(medidores => {
      this.dataSource.data = medidores.map(medidor => {
         return {
           id: medidor.id,
           ip: medidor.ip,
           name: medidor.name,
           port: medidor.port
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
